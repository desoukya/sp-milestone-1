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
import AccountList from "./AccountList";

export default function Dashboard() {
  return (
    <div>
      <div className="row ">
        <div class="col-sm-6">
          <AccountList />
        </div>
      </div>
    </div>
  );
}
