import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import transactions from "../pages/transactions";

export default class accountlist extends Component {
  constructor(props) {
    super(props);
  }



 /* currentacc = this.props.obj.accountNumber;


  handleClick = () => {
    this.window.localStorage.setItem("currentAccount",this.currentacc);
    this.window.location = "http://localhost:3000/transactions"
    };
  
*/

  render() {
    return (
      <tr>
        <td>{this.props.obj.accountNumber}</td>
        <td>{this.props.obj.balance}</td>
        <td>
          <Button color="primary">View Transactions</Button>
        </td>
      </tr>
    );
  }
}
