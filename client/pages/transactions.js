import React, { useEffect, useState } from "react";
import { Label } from "reactstrap";
import apiService from "../services/apiService";
import Table from 'react-bootstrap/Table'
import styles from "../styles/Home.module.css";
import {
  Form,
  FormGroup,
  Button,
} from "reactstrap";


export default function Dashboard() {
  const [Transactions, viewTransactions] = useState([]);
  const [balance, setBalance] = useState(" ");

  useEffect(() => {
    (async function(){
    console.log("Mounting!");
    const accountId = localStorage.getItem("accountid");
    const response = await apiService.get(`http://localhost:5000/transactions/${accountId}`);
    viewTransactions(response.data);
    calculateBalance(accountId);})
  }, []);
  //getting the balance of the account
  const calculateBalance = async (accountid) => {
    const response = await apiService.get(
      `http://localhost:5000/accounts/user/balance/${accountid}`
    );
    setBalance(response.data);
  };

  return (
    <div className={styles.border}>
      <br></br>
      <h2 >Account Balance: {balance}$</h2>
      <Form className={styles.form}>
      <FormGroup >
      <Table striped bordered hover>
        <thead className="thead-dark">
          <tr align='center'>
            <th scope="col">Transaction name</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {" "}
          {Transactions.map((Transaction, key) => (
            <tr align='center'>
              <td>{Transaction.name}</td>
              <td>{Transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </FormGroup>
      </Form>
    </div>
  );
}