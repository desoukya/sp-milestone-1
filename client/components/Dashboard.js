import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import {axios} from '../services/apiService'
import {apiService} from '../services/apiService';



export default function Dashboard() {
  const [accounts, viewAccounts] = useState([]);
  useEffect(() => {
    console.log("Mounting!");
    const userid="12";
    axios.get(`http://localhost:5000/accounts/${userid}`)
         .then(res => viewAccounts(res.data));
},[]);
 
  return (
    <div>
      <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>  {
        accounts.map((account , key) => (
           <><th scope="row">{key}</th>
             <td>{account.id}</td>
             <td>{account.status}</td>
             <td>{account.balance}</td></>
        ))}
        </tr>
        </tbody>
      </table>
      </div>
    );
    
    }
  

  //return <div>DASHBOARD</div>;


