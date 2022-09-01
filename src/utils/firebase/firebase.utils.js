import {initializeApp} from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'



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
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);