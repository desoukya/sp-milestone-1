import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import transactions from "../pages/transactions";

export default class accountlist extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.balance}</td>
        <td>
          <Link  to={"/transactions"}>
            transactions
          </Link>
        </td>
     </tr>
    );
    }
}