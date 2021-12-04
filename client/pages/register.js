import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { useState,useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useMutateRegisterUser } from "../adapters/user";

import axios from "axios";



export default function Register() {
  //properties
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [phone, SetPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  //states
  const [firstNameState, setFirstNameState] = useState("");
  const [lastNameState, setLastNameState] = useState("");
  const [userIdState, setUserIdState] = useState("");
  const [phoneState, setPhoneState] = useState("");
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const [userIds, setIds] = useState([]);
  const [userEmails, setEmails] = useState([]);
  const [userPhones, setPhones] = useState([]);


  const useRegisterMutation = useMutateRegisterUser();
  const defaultId="100";
  const [useFetch,setUseFetch]=useState([]);


  if(userId.length==0||isNaN(Number(userId))){setUserId(defaultId)};
  
  useEffect(() => {
    axios.get(`http://localhost:5000/user/list`).then((myUser)=>{
      setUseFetch(myUser.data);

      //get all ids of users to prevent registering using the same id
      var ids = useFetch.reduce((acc,user)=>{
        acc.push(user.userId);
        return acc;
      },[])

      setIds(ids);
     
      //get all emails of users to prevent registering using the same email
      var emails = useFetch.reduce((acc,user)=>{
        acc.push(user.email);
        return acc;
      },[]);

      setEmails(emails);
      
    })
},[userId])
  
  


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

  const validateUserId = (value) => {
    let userIdState;
    var prevId=userIds.filter( id=> {return id === Number(value)});


    
    if (value.length == 7 && !isNaN(Number(value)) && prevId.length === 0) {
      userIdState = "has-success";
    }
    else {
      userIdState = "has-danger";
    }
    setUserIdState(userIdState);
  }


  const validatePhone = (value) => {
    let phoneState;
    if(value.length>=3){
      const prefix = value.substring(0,3) ; 
      if (value.length == 11 && !isNaN(Number(value)) && (prefix === "010" || prefix === "011" || prefix ===  "012" || prefix === "015")) {
        phoneState = "has-success";
      }
      else {
        phoneState = "has-danger";
      }
    }
    else{
      phoneState = "has-danger";
    }
    setPhoneState(phoneState);
  }


  const validateEmail = (value) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let emailState;
    let alreadyUser=  useFetch;
    if (emailRegex.test(value) && !userEmails.find( email=> email===value)) {
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
    
    if (name === "firstName") {
      validateFirstName(value);
      setFirstName(value);
    }
    
    else if (name === "lastName") {
      validateLastName(value);
      setLastName(value);
    }

    else if (name === "userId") {
      validateUserId(value);
      setUserId(value);
    }
    
    else if (name === "email") {
      validateEmail(value);
      setEmail(value);
    }
    
    else if(name === "password") {
      validatePassword(value);
      setPassword(value);
    }

    else if (name === "confirm_password") {
      validateConfirmPassword(value);
      setConfirmPassword(value);
      
    } 

    else {
      validatePhone(value);
      SetPhone(value);
    }

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    validateFirstName(firstName);
    validateLastName(lastName);
    validateUserId(userId);
    validateEmail(email);
    validatePassword(password);
    validateConfirmPassword(confirmPassword);
    validatePhone(phone);
    console.log(userIdState);
    console.log(userId);

    
    

    if (
      firstNameState==="has-success"&&
      lastNameState==="has-success"&&
      userIdState==="has-success"&&
      emailState === "has-success" &&
      passwordState === "has-success" &&
      confirmPasswordState === "has-success"&&
      phoneState==="has-success"
    ) {
      // Call User Register Adapter
      useRegisterMutation.mutate(
        {
          "firstName": firstName,
          "lastName": lastName,
          "userId": Number(userId),
          "email": email,
          "password": password,
          "phone": phone
        }
      );
    }
  };

  return (
    <div className={styles.App}>
      <Button color="outline-primary"  onClick={() => {      
             window.location.replace("http://localhost:3000");    
       }} >Return to Sign in</Button>
      <h2>Register</h2>
      <Form className={styles.form} onSubmit={handleSubmit}>
      
      <FormGroup>
          <Label className={styles.label} for="firstName">
            First Name: 
          </Label>
          <Input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter First Name"
            onChange={handleChange}
            valid={firstNameState === "has-success"}
            invalid={firstNameState === "has-danger"}
          />
          <FormFeedback>Please don't leave it empty</FormFeedback>
        </FormGroup>
        

        <FormGroup>
          <Label className={styles.label} for="lastName">
            Last Name: 
          </Label>
          <Input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter Last Name "
            onChange={handleChange}
            valid={lastNameState === "has-success"}
            invalid={lastNameState === "has-danger"}
          />
          <FormFeedback>Please don't leave it empty</FormFeedback>

          </FormGroup>

          <FormGroup>
          <Label className={styles.label} for="userId">
            GIU ID: 
          </Label>
          <Input
            type="Number"
            name="userId"
            id="userId"
            placeholder="Enter User ID"
            onChange={handleChange}
            valid={userIdState === "has-success"}
            invalid={userIdState === "has-danger"}
          />
          <FormFeedback>ID is incorrect or has been registered with before.</FormFeedback>


        </FormGroup>

        <FormGroup>
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