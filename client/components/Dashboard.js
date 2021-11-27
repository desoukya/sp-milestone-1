import styles from "../styles/Home.module.css";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Component } from "react";
import { UserService } from "../../server/src/modules/user/user.service.ts"
import MyApp from "../pages/_app";



export default class Dashboard extends Component() {
  constructor(props) {
    super(props);
    this.state = {
      user: [],
    };
  }

  componentDidMount() {
    userService.findOneByEmail(localStorage.getItem(myUser))
      .then((data) => {
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

  render()
  {
    return(
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
