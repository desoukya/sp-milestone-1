import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Register() {
  const [fullName, setFullNamel] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [accountId, setAccountId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullNameState, setFullNameState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [userNameState, setUserNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [accountIdState, setAccountIdState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");


  const validatePhone = (value) => {
    let phoneState;
    if (value.length == 11) {
      phoneState = "has-success";
    } else {
      phoneState = "has-danger";
    }
    setPhoneState(PhoneState);
  };

  const validateAccountId = (value) => {
    let accountIdState;
    if (value.length == 7) {
      accountIdState = "has-success";
    } else {
      accountIdState = "has-danger";
    }
    setAccountIdState(accountIdState);
  };

  const validateUserName = (value) => {
    let userNameState;
    if (value.length == 16) {
      userNameState = "has-success";
    } else {
      userNameState = "has-danger";
    }
    setUserNameState(userNameState);
  };
  const validateEmail = (value) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let emailState;
    if (emailRegex.test(value)) {
      emailState = "has-success";
    } else {
      emailState = "has-danger";
    }
    setEmailState(emailState);
  };

  const validatePassword = (value) => {
    let PasswordState;
    if (value.length > 5) {
      PasswordState = "has-success";
    } else {
      PasswordState = "has-danger";
    }
    setPasswordState(PasswordState);
  };

  const validateConfirmPassword = (value) => {
    let confirmPasswordState;
    if (value === password && password.length > 0) {
      confirmPasswordState = "has-success";
    } else {
      confirmPasswordState = "has-danger";
    }
    setConfirmPasswordState(confirmPasswordState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      validateEmail(value);
      setEmail(value);
    } else if (name === "confirm_password") {
      validateConfirmPassword(value);
      setConfirmPassword(value);
    } else {
      validatePassword(value);
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    validateUserName(userName);
    validateAccountId(accountId);
    validatePhone(phone);

    if (
      emailState === "has-success" &&
      passwordState === "has-success" &&
      confirmPasswordState === "has-success" &&
      phoneState === "has-success" &&
      userNameState === "has-success" &&
      accountIdState === "has-success" 
      
    ) {
      // Call User Register Adapter
    }
  };

  return (
    <div className={styles.App}>
      <h2>Register</h2>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <FormGroup>
          <Label className={styles.label} for="email">
            Email
          </Label>

          <Input
            type="text"
            name="email"
            id="email"
            placeholder="example@example.com"
            onChange={handleChange}
            valid={emailState === "has-success"}
            invalid={emailState === "has-danger"}
          />
          <FormFeedback>Please input a correct email.</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="password">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={handleChange}
            valid={passwordState === "has-success"}
            invalid={passwordState === "has-danger"}
          />
          <FormFeedback>
            Password must be at least 6 characters long.
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="password">
            Confirm Password
          </Label>
          <Input
            type="password"
            name="confirm_password"
            id="password"
            placeholder="********"
            onChange={handleChange}
            valid={confirmPasswordState === "has-success"}
            invalid={confirmPasswordState === "has-danger"}
          />
          <FormFeedback>Passwords don't match.</FormFeedback>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
}
