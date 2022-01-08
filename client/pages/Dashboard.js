import React, { useEffect, useState } from 'react';
import apiService from "../services/apiService";
import Table from 'react-bootstrap/Table'
import {
  Form,
  FormGroup,
  Button
} from "reactstrap";
import styles from "../styles/Home.module.css";

export default function Dashboard() {
  const [accounts, viewAccounts] = useState([]);
  
  useEffect(() => {
    (function(){
      const user = JSON.parse(localStorage.getItem("user")).user_id;
      fetch("http://localhost:5000/accounts/${user}")
      .then((response) => response.json())
      .then((responseJson) => {
        viewAccounts(responseJson.data);
      });
    })
  },[]);
  /*useEffect(() => {
    (async function(){
    console.log("Mounting!");
    const user = JSON.parse(localStorage.getItem("user")).user_id;
    const response = await apiService.get(`http://localhost:5000/accounts/${user}`)
    viewAccounts(response.data)
    })
  },[]);*/

  return (
    <div className={styles.border}>
      <h1 >Accounts</h1>
      <Form className={styles.form}>
        <FormGroup>
          <Table  striped bordered hover>
            <thead>
              <tr align='center'>
                <th align='center' scope="col">#</th>
              <th align='center' scope="col">Status</th>
              <th align='center' scope="col">Transactions</th>
              </tr>
          </thead>
          <tbody>{
          accounts.map((acc, key) => (
          <tr>
            <td>aaa</td>
            <td align='center'>{key}</td>
            <td align='center'>{acc.status}</td>
            <td align='center'>{acc.accountid}</td>
          </tr>))}
          </tbody>
          </Table>
        </FormGroup>
      </Form>
    </div>   
  );
}