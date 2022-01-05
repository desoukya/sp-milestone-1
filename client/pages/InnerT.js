import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    FormFeedback,
  } from "reactstrap";
  import styles from "../styles/Home.module.css";

  export default function InnerTrans() {
   
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
    };
  
    return (
      <div className={styles.App}>
        <h2>Inner Transactions</h2>
        <Form className={styles.form} onSubmit={handleSubmit}>
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
  