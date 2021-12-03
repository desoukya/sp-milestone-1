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
import { useMutateRegisterUser } from "../adapters/user.js";

export default function Register() {
  //const [name,setName] = useState("");
  //const [phone,setPhone] = useState("");
  //const [username,setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //const [giu_id,setGIU_id] = useState("");
  //const [nameState,setNameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  
  const registerUser = useMutateRegisterUser();


  /*const validateName = (value) => {
    let nameState;
    if (value.length >= 3) {
      nameState = "has-success";
    } else {
      nameState = "has-danger";
    }
    setNameState(nameState);
  };*/
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
    } else if  (name === "password") {
      validatePassword(value)
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    //validateName(name);

    if (
      //nameState === "has-success" &&
      emailState === "has-success" &&
      passwordState === "has-success" &&
      confirmPasswordState === "has-success"
    ) {
      registerUser.mutate({"email":email, "password":password, "confirmPassword":confirmPassword});
    }
  };

  return (
    <div className={styles.App}>
      <h2>Register</h2>
      <Form className={styles.form} onSubmit={handleSubmit}>
        <FormGroup>
          <Label className={styles.label} for="name">
            Name
          </Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="name"
            onChange={handleChange}
            //valid={nameState === "has-success"}
            //invalid={nameState === "has-danger"}
          />
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="username">
            username
          </Label>
          <Input
            type="text"
            name="username"
            id="username"
            placeholder="username"
            onChange={handleChange}
          />
        </FormGroup>
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
        <FormGroup>
          <Label className={styles.label} for="phone">
            Phone
          </Label>
          <Input
            type="number"
            name="phone"
            id="phone"
            placeholder="phone number"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="GIU_id">
            GIU ID
          </Label>
          <Input
            type="number"
            name="GIU_id"
            id="GIU_id"
            placeholder="XXXXXXX"
            onChange={handleChange}
          />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
}
