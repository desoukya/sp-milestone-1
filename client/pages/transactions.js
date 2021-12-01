import React, { useEffect, useState } from 'react';
import { Label } from 'reactstrap';
import apiService from "../services/apiService";
import Table from 'react-bootstrap/Table'

export default function Dashboard() {
  const [Transactions, viewTransactions] = useState([]);
  const [balance, setBalance] = useState(" ");

  useEffect(async () => {
    console.log("Mounting!");
    const accountId = localStorage.getItem("accountid")
    const response = await apiService.get(`http://localhost:5000/transactions/${accountId}`)
    viewTransactions(response.data)
    calculateBalance(accountId);
},[]);

const calculateBalance = async(accountid) => {
  const response = await apiService.get(`http://localhost:5000/accounts/user/balance/${accountid}`);
  setBalance(response.data);
}
 
  return (
    <div>
      <Label>Account Balance: {balance}</Label>
      <Table  striped bordered hover>
      <thead className="thead-dark">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Transaction name</th>
          <th scope="col">Credit</th>
          <th scope="col">Debit</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody> {
        Transactions.map((Transaction , key) => (
        <tr> 
             <td >{Transaction.Display_date}</td>
             <td>{Transaction.name}</td>
             <td>{Transaction.credit?Transaction.amount:"  "}</td>
             <td >{Transaction.debit?Transaction.amount:"   "}</td>
             <td>{Transaction.amount}</td>
        </tr>
      )) }
        </tbody> 
      </Table>
     
        function Backtodashboard() {
          location.replace("http://localhost:3000")
        }
      <button onClick = "Backtodashboard()">Back to dashboard</button>
      </div>
    );
    
    }
