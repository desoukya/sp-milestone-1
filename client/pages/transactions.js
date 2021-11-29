import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import TransactionList from "../components/TransactionList";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Navbar from "../components/Navbar";
import { renderMatches } from "react-router";

export default class Transactions extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  async componentDidMount() {
    const currentNum = window.localStorage.getItem("currentAccount");

    await axios
      .get("http://localhost:8000/transactions/transactionList/" + parseInt(currentNum))
      .then((response) => {
        console.log("success");
        this.setState({
          transactions: Object.values(response.data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.transactions.map((res, i) => {
      return <TransactionList obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>transactionName</th>
                <th>debit</th>
                <th>credit</th>
                <th>totalAmount</th>
                <th>accountNumber</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }
}
