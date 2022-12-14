import {initializeApp} from 'firebase/app'

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';


import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7FOQY2Cb2fhBmRX8DEOrfHbqezlhbADI",
    authDomain: "crown-clothing-db-c86b3.firebaseapp.com",
    projectId: "crown-clothing-db-c86b3",
    storageBucket: "crown-clothing-db-c86b3.appspot.com",
    messagingSenderId: "416040403517",
    appId: "1:416040403517:web:5b7299c241aaa08a29a054"
  };
  
  // Initialize Firebase
  initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  }); 

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db  = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
    if(!userAuth ) return;
  /**
   * give me a document collection in db:: collection name users:: with ::userAuth.uid
   */
   const userDocRef = doc(db,'users',userAuth.uid);
   console.log(userDocRef);

   /**
    * we create a userSnapshot
    */
   const userSnapshot = await getDoc(userDocRef);

   console.log(userSnapshot);
   console.log(userSnapshot.exists());

   //if user data does not exist
   // create / set the document with the data from userAuth in my collection
   //! the bang operater flipps the condition 
    if(!userSnapshot.exists()){  // see if snapshot exist if not set it to db
      const {displayName,email}= userAuth;
      const createdAt = new Date();
      try {
        // method that adds data to db
        await setDoc(userDocRef,{
          displayName,
          email,
          createdAt
        } );
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
   // if user data exists
   return userDocRef
}

/**
 * @param {*} param0 
 * @returns 
 */

export const createAuthUserWithEmailAndPassword= async ({email,password}) =>{
    // if (!email || !password) end execution
    if(!email && !password  ) return ;
    return await createUserWithEmailAndPassword(auth,email,password);
}

/**
 * @param {*} param0 
 * @returns 
 */

export const  signInAuthUserWithEmailAndPassword =async ({email,password}) =>{
  if(!email && !password  ) return ;
  return await signInWithEmailAndPassword(auth,email,password);
}


/**
 * take not that the auth keeps track of the users we have loged in 
 */
export const signOutUser = () => signOut(auth);


// using an observable listener*
/**
 * it allows as to hook in some kind of a  steam of events 
 * @param {*} callBack 
 * @returns 
 */
export const onAuthStateChangedsListerner = (callback) => onAuthStateChanged(auth,callback);