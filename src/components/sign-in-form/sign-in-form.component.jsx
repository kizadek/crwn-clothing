import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "./../../utils/firebase/firebase.utils";
import "./sign-in-form.styless.scss";
// so as not to use useState for each filed
const defaultFormFiled = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFileds, setFormFileds] = useState(defaultFormFiled);
  const { email, password } = formFileds;
  // a function that clears the form fileds
  const resetFormFields = () => {
    setFormFileds(defaultFormFiled);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(formFileds);
      console.log(user);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email !!");
          break;
        case "auth/user-not-found":
          alert(" sorry no user associated with the provided email");
          break;
      }
      console.log("user login", error);
    }
  };

  // we need a generic function for the form on change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formFileds, [name]: value });
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and passwords</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sin-In</Button>
          <Button  type='button' buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
