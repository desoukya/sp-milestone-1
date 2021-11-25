import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
} from "reactstrap";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import AccountList from "../components/AccountList";
import Dashboard from "../components/Dashboard";
import Navbar from "../components/Navbar";

export default function home() {
  return (
    <div>
      <Navbar />
      <div className={styles.App}>
        <h1 style={{ textAlign: "center" }}>Welcome To SafeMonii Bank</h1>
        <Dashboard />
      </div>
    </div>
  );
}
