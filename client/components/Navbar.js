import React from "react";
import { Link } from "react-router-dom";
import home from "../pages/home"


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark  ">
      <ul class="navbar-nav ">
      <a class="navbar-brand" href="#">SafeMonii</a>
      </ul>
      <u1 class="navbar-nav ">
      <li class="nav-item" justify-content-center>
          <a class="nav-link" href="/home">
            Dashboard
          </a>
        </li>
      </u1>
    </nav>
  );
}
