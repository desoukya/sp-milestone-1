import styles from "../styles/Home.module.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Component } from "react";
import MyApp from "../pages/_app";
import apiService from "../services/apiService";

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    const current = "";
    const user = JSON.parse(window.localStorage.getItem("myUser"));
    const email = encodeURI(user.email);
    console.log(user.email);
    console.log(email);

    const url = `http://localhost:8000/users/email/${email}`;
    console.log(url);
    console.log('http://localhost:8000/users/email/baz@abdo.com');

    const x = apiService.get(url);
    console.log(x);

    axios.get(url).then((response) => { 
      console.log("hgh "+response);
      current = response;
    }).catch((error) => console.log("maaaa2 " + error));


    console.log("sss " + current);

    

    axios
      .get(
        "http://localhost:8000/accountList/:" +
          toString(localStorage.getItem("myUser").studentId)
      )
      .then((response) => {
        console.log("success");
        this.setState({
          user: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.user.map((res, i) => {
      return <accountlist obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <div className="table-wrapper">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>{this.DataTable()}</tbody>
          </Table>
        </div>
      </div>
    );
  }

  /*render (
    <div
      className={styles.App}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}
    >
      <div className="row ">
        <div class="col-sm-6">
          <ul class="list-group">
            <li class="list-group-item">Accounts</li>
            <li class="list-group-item">Account1</li>
            <li class="list-group-item">Account3</li>
            <li class="list-group-item">Account4</li>
            <li class="list-group-item">Account5</li>
          </ul>
        </div>
        <div class="col-sm-6">
          <ul class="list-group">
            <li class="list-group-item">Balance</li>
            <li class="list-group-item">300</li>
            <li class="list-group-item">10000</li>
            <li class="list-group-item">500000</li>
            <li class="list-group-item">100</li>
          </ul>
        </div>
      </div>
    </div>
  );*/
}
