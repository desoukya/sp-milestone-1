import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    FormFeedback,
  } from "reactstrap";
  import styles from "../styles/Home.module.css";
  import { useState } from "react";

export default function InnerTrans() {
  const [name,setName] = useState("");
  const [value,setValue] = useState("");
  const [userid,setUserid] = useState("");
  const [nameState,setNameState] = useState("");
  const [valueState,setValueState] = useState("");
  const [useridState,setUseridState] = useState("");

  const validateName = (value) => {
    let nameState;
    if (value.length >= 2) {
      nameState = "has-success";
    } else {
      nameState = "has-danger";
    }
    setNameState(nameState);
  };

  const validateValue = (value) => {
    let valueState;
    if (value.length >= 2) {
      valueState = "has-success";
    } else {
      valueState = "has-danger";
    }
    setValueState(valueState);
  };

  const validateUserid = (value) => {
    let useridState;
    if (value.length >= 2) {
      useridState = "has-success";
    } else {
      useridState = "has-danger";
    }
    setUseridState(useridState);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if(name === "name"){
      validateName(value);
      setName(value);
    }
    if(name === "value"){
      validateValue(value);
      setValue(value);
    }
    if(name === "userid"){
      validateUserid(value);
      setUserid(value);
    }
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    validateName(name);
    if(
      nameState === "has-success" &&
      valueState === "has-success" &&
      useridState === "has-success"
    ){

    }
  };
  
  return (
    <div className={styles.App}>
      <h2>Inner Transactions</h2>
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
          <FormFeedback>
                
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="value">
          Value
          </Label>
          <Input
            type="number"
            name="value"
            id="value"
            placeholder="Enter the value"
            onChange={handleChange}
            valid={valueState === "has-success"}
            invalid={valueState === "has-danger"}
          />
          <FormFeedback>
                
          </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label className={styles.label} for="userid">
          User ID
          </Label>
          <Input
            type="number"
            name="userid"
            id="userid"
            placeholder="Enter the ID"
            onChange={handleChange}
            valid={nameState === "has-success"}
            invalid={nameState === "has-danger"}
          />
          <FormFeedback>
                
          </FormFeedback>
        </FormGroup>
        <Button color="primary">Submit</Button>
        <a href = "http://localhost:3000/Dashboard">Transactions</a>
      </Form>
    </div>
  );
}
  