import React from "react";
import { Link } from "react-router-dom";
import home from "../pages/home";
import Button from "react-bootstrap/Button";
import Transactions from "../pages/Transactions";

export default function Navbar() {
  function signout(){
    window.localStorage.clear(), (window.location.replace("http://localhost:3000"));
  };
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark justify-content-center">
      <ul class="navbar-nav ">
        <a class="navbar-brand">SafeMonii</a>
      </ul>
      <u1 class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link" href="/">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href='#' onClick={signout}>Signout</a>
        </li>
      </u1>
    </nav>
  );
}
