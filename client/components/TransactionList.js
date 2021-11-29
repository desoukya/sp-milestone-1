import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import transactions from "../pages/transactions";

export default class TransactionList extends Component {
  constructor(props) {
    super(props);
  }








  render() {
    return (
      <tr>
        <td>{this.props.obj.Date}</td>
        <td>{this.props.obj.transactionName}</td>
        <td>{this.props.obj.debit}</td>
        <td>{this.props.obj.credit}</td>
        <td>{this.props.obj.totalAmount}</td>
        <td>
        </td>
      </tr>
    );
  }
}
