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
import { useMutateRegisterUser } from "../adapters/user";


export default function Register() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [phone, SetPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [userIdState, setIdState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const useRegisterMutation = useMutateRegisterUser();

  const validateFirstName = (value) => {
    let firstNameState;
    if (value.length > 2) {
      firstNameState = "has-success";
    }
    else {
      firstNameState = "has-danger";
    }
    setFirstNameState(firstNameState);
  }


  const validateLastName = (value) => {
    let lastNameState;
    if (value.length > 2) {
      lastNameState = "has-success";
    }
    else {
      lastNameState = "has-danger";
    }
    setLastNameState(lastNameState);
  }

  const validateuserId = (value) => {
    let userIdState;
    if (value.length == 7 && (!isNaN(value))) {
      userIdState = "has-success";
    }
    else {
      userIdState = "has-danger";
    }
    setIdState(userIdState);
  }


  const validatePhone = (value) => {
    let phoneState;
    const prefix = values.substring(0,3) ; 
    if (value.length = 11 && (!isNaN(value)) && (prefix === "010" || prefix ===  "012" || prefix === "015")) {
      phoneState = "has-success";
    }
    else {
      phoneState = "has-danger";
    }
    setPhoneState(phoneState);
  }


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
    } else if (name === "userId") {
      validateuserId(value);
      setUserId(value);
    }

    else if (name === "firstName") {
      validateFirstName(value);
      setFirstName(value);
    }

    else if (name === "lastName") {
      validateLastName(value);
      setLastName(value);
    }

    else if (name === "phone") {
      validatePhone(value);
      SetPhone(value);
    }




    else {
      validatePassword(value);
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);

    if (
      emailState === "has-success" &&
      passwordState === "has-success" &&
      confirmPasswordState === "has-success"
    ) {
      // Call User Register Adapter
      useRegisterMutation.mutate(
        {
          "firstName": firstName,
          "lastName": lastName,
          "userId": Number(userId),
          "email": email,
          "password": password,
          "phone": Number(phone)
        }
      );
    }
  };

  return (
    <div className={styles.App}>
      <h2>Register</h2>
      <Form className={styles.form} onSubmit={handleSubmit}>

      <FormGroup>
          <Label className={styles.label} for="firstname">
            First Name: 
          </Label>
          <Input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter First Name"
            onChange={handleChange}
            valid={firstNameState === "has-success"}
            invalid={firstNameState === "has-danger"}
          />
          <FormFeedback>Please don't leave it empty</FormFeedback>
        </FormGroup>
        

        <FormGroup>
          <Label className={styles.label} for="LastName">
            Last Name: 
          </Label>
          <Input
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Enter Last Name "
            onChange={handleChange}
            valid={lastNameState === "has-success"}
            invalid={lastNameState === "has-danger"}
          />
          <FormFeedback>Please don't leave it empty</FormFeedback>

          <FormGroup>
          <Label className={styles.label} for="userId">
            Username ID: 
          </Label>
          <Input
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Enter User ID "
            onChange={handleChange}
            valid={userIdState === "has-success"}
            invalid={userIdState === "has-danger"}
          />
          <FormFeedback>Please don't leave it empty</FormFeedback>


        </FormGroup>
          <Label className={styles.label} for="email">
            Email: 
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
            Password:
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
            Confirm Password:
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
           <FormFeedback>
            Please make sure it's matching the password above.
          </FormFeedback>
        </FormGroup>

        <FormGroup>
          <Label className={styles.label} for="phone">
            Phone Number: 
          </Label>
          <Input
            pattern =  "/^-?(|[0-9]\d*)?$/"
            type="number"
            name="phone"
            id="phone"
            placeholder = "Enter Phone Number"
            onChange={handleChange}
            valid={phoneState === "has-success"}
            invalid={phoneState === "has-danger"}
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