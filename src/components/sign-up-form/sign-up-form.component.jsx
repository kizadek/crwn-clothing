import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import './sign-up-form.styless.scss'
// so as not to use useState for each filed
const defaultFormFiled = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFileds, setFormFileds] = useState(defaultFormFiled);
  const { displayName, email, password, confirmPassword } = formFileds;
  // a function that clears the form fileds
  const resetFormFields = () => {
    setFormFileds(defaultFormFiled);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords do not match!!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(formFileds);
      console.log("new data", user);
      const userDocRef = await createUserDocumentFromAuth({
        ...user,
        displayName: formFileds.displayName,
      });
      console.log("submited", userDocRef);
      // make sur we clear our form fileds
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("provided email already in use");
      }
      console.log("user creation encoutered an error", error);
      alert(" sorry there was an error ");
    }
  };

  // we need a generic function for the form on change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFileds({ ...formFileds, [name]: value });
  };
  return (
    <div className="sign-up-container">
        <h2>Dont have an account?</h2>
      <span>Sign up with your email and passwords</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label= "Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">sin-Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
