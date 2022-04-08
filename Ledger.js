import React, { Component } from "react";
// import "./styles.css";
import apiService from "../services/apiService";
import transactions from './transactions';
import axios from "axios";
import Table from 'react-bootstrap/Table'
export default class App extends Component {
constructor() {
super();
this.state = {
    Transactions: []
    };
    
}
// Runs when the component is first put on the DOM
componentDidMount() {
console.log("Mounting!");
const accountid = localStorage.getItem("accountid");
axios
.get( `http://localhost:5000/transaction/${accountid}`)
.then((response) => this.setState({ transactions: response.data }));
}
// viewTransactions(response.data);
// Runs when the component is updated
componentDidUpdate() {
console.log("Updating!");
}
render() {
 const removeFirstItem = () => {
this.setState({
    transactions: this.state.Transactions
});}

return (
<div>
<p className="transactions">Transactions</p>
<ul style={{ textAlign: "center" }}>
{this.state.Transactions.map((item) => (
<transactions key={item.accountid}  />
))}
</ul>
<Table>
        <thead className="thead-dark">
          <tr align='center'>
            <th scope="col">Date</th>
            <th scope="col">Transaction name</th>
            <th scope="col">Credit</th>
            <th scope="col">Debit</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {" "}
            <tr align='center'>
              <td>{transactions.Display_date}</td>
              <td>{transactions.credit ? Transaction.amount : "  "}</td>
              <td>{transactions.debit ? Transaction.amount : "   "}</td>
              <td>{transactions.amount}</td>
            </tr>
        </tbody>
      </Table>
      </div>
);
}
}