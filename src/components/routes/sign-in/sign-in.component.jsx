import {
    signInWithGooglePopup,
    createUserDocumentFromAuth
} from '../../../utils/firebase/firebase.utils'
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import Button from '../../button/button.component';


const SignIn =()=>{
    const  signInWithGoogle = async ()=>{
        const {user} = await signInWithGooglePopup();
        // console.log(user)
        const  userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef); 
    }

    return(
        <>
        <div>
            <h1>Sign In Page</h1>
            <Button buttonType='google' onClick={signInWithGoogle}>signIn with Google</Button>
        </div>
          <SignUpForm />
        </>
    )
}


export default SignIn;