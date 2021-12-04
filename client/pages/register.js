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
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [confirmPassword, setConfirmPassword] = useState("");
  const [phone,setPhone] = useState("");
  const [user_id,setUser_id] = useState("");
  const [nameState,setNameState] = useState("");
  const [UsernameState,setUsernameState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  //const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const [PhoneState,setPhoneState] = useState("");
  const [User_idState,setUser_idState] = useState("");
  
  const registerUser = useMutateRegisterUser();


  const validateName = (value) => {
    let nameState;
    if (value.length >= 2) {
      nameState = "has-success";
    } else {
      nameState = "has-danger";
    }
    setNameState(nameState);
  };
  const validateUsername = (value) => {
    let UsernameState;
    if (value.length >= 2) {
      UsernameState = "has-success";
    } else {
      UsernameState = "has-danger";
    }
    setUsernameState(UsernameState);
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

  /*const validateConfirmPassword = (value) => {
    let confirmPasswordState;
    if (value === password && password.length > 0) {
      confirmPasswordState = "has-success";
    } else {
      confirmPasswordState = "has-danger";
    }
    setConfirmPasswordState(confirmPasswordState);
  };*/

  const validatePhone = (value) => {
    let PhoneState;
    if (value.length === 11) {
      PhoneState = "has-success";
    } else {
      PhoneState = "has-danger";
    }
    setPhoneState(PhoneState);
  };

  const validateUser_id = (value) => {
    let User_idState;
    if (value.length >= 1) {
      User_idState = "has-success";
    } else {
      User_idState = "has-danger";
    }
    setUser_idState(User_idState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === "name"){
      validateName(value);
      setName(value);
    } else if(name === "username"){
      validateUsername(value);
      setUsername(value);
    } else if (name === "email") {
      validateEmail(value);
      setEmail(value);
    } //else if (name === "confirm_password") {
      //validateConfirmPassword(value);
      //setConfirmPassword(value);}
       else if  (name === "password") {
      validatePassword(value)
      setPassword(value);
    } else if(name === "phone"){
      validatePhone(value);
      setPhone(value);
    } else if(name === "user_id"){
      validateUser_id(value);
      setUser_id(value);
    } 
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateName(name);
    validateUsername(username);
    validateEmail(email);
    validatePassword(password);
    //validateConfirmPassword(confirmPassword);
    validatePhone(phone);
    validateUser_id(user_id);

    if (
      nameState === "has-success" &&
      UsernameState === "has-success" &&
      emailState === "has-success" &&
      passwordState === "has-success" &&
      //confirmPasswordState === "has-success" &&
      PhoneState === "has-success" &&
      User_idState ==="has-success"
    ) {
      registerUser.mutate({
        "name":name,
        "username":username,
        "email":email,
        "password":password, 
        //"confirmPassword":confirmPassword,
        "phone":phone,
        "user_id":Number(user_id)
      });
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
            valid={nameState === "has-success"}
            invalid={nameState === "has-danger"}
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
            valid={UsernameState === "has-success"}
            invalid={UsernameState === "has-danger"}
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
          <Label className={styles.label} for="phone">
            Phone
          </Label>
          <Input
            type="text"
            name="phone"
            id="phone"
            placeholder="phone number"
            onChange={handleChange}
            valid={PhoneState === "has-success"}
            invalid={PhoneState === "has-danger"}
          />
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="user_id">
            User ID
          </Label>
          <Input
            type="number"
            name="user_id"
            id="user_id"
            placeholder=""
            onChange={handleChange}
            valid={User_idState === "has-success"}
            invalid={User_idState === "has-danger"}
          />
          <FormFeedback>
            Phone number must be 11 numbers long.
          </FormFeedback>
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
    </div>
  );
}
