import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Transactions from "../pages/Transactions";

export default class AccountList extends Component {
  constructor(props) {
    super(props);
  }


  handleClick = () => {
    const currentacc = this.props.obj.accountNumber;
    window.localStorage.setItem("currentAccount",JSON.stringify(currentacc));
    const currentbalance = this.props.obj.balance;
    window.localStorage.setItem("currentBalance",JSON.stringify(currentbalance));
    window.location = "http://localhost:3000/transactions"
    };
  


  render() {
    return (
      <tr>
        <td>{this.props.obj.accountNumber}</td>
        <td>{this.props.obj.balance}</td>
        <td>
          <Button className="btn-success" onClick= {this.handleClick}>View Transactions</Button>
        </td>
      </tr>
    );
  }
}
