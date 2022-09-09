import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../../utils/firebase/firebase.utils'




const SignIn =()=>{
    const  signInWithGoogle = async ()=>{
        const {user} = await signInWithGooglePopup();
        // console.log(user)
        const  userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={signInWithGoogle} >signIn with Google</button>
        </div>
    )
}


export default SignIn;