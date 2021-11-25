import React from "react";
import { Link } from "react-router-dom";
import home from "../pages/home"
import transactions from "../pages/transactions"


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
      <ul class="navbar-nav ">
      <a class="navbar-brand" >SafeMonii</a>
      </ul>
      <u1 class="navbar-nav ">
      <li class="nav-item" >
          <a class="nav-link" href="/home">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/transactions">
            Transactions
          </a>
        </li>
      </u1>
    </nav>
  );
}
