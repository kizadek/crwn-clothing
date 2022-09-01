import {signInWithGooglePopup} from '../../../utils/firebase/firebase.utils'




const SignIn =()=>{
    const  signInWithGoogle = async ()=>{
        const res = await signInWithGooglePopup();
        console.log(res)
    }

    return(
        <div>
            <h1>Sign In Page</h1>
            <button onClick={signInWithGoogle} >signIn with Google</button>
        </div>
    )
}


export default SignIn;