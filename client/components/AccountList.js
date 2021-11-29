import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import transactions from "../pages/transactions";

export default class accountlist extends Component {
  constructor(props) {
    super(props);
  }






  handleClick = () => {
    const currentacc = this.props.obj.accountNumber;
    window.localStorage.setItem("currentAccount",JSON.stringify(currentacc));
    window.location = "http://localhost:3000/transactions"
    };
  


  render() {
    return (
      <tr>
        <td>{this.props.obj.accountNumber}</td>
        <td>{this.props.obj.balance}</td>
        <td>
          <Button color="primary" onClick= {this.handleClick}>View Transactions</Button>
        </td>
      </tr>
    );
  }
}
