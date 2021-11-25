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

export default function home() {
  return (
    <div>
      <div className="row ">
        <div class="col-sm-6">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}
