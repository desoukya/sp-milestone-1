import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [accounts, viewAccounts] = useState([]);
  useEffect(() => {
  console.log("Mounting!");
  axios
  .get(`http://localhost:5000/accounts/"12"`)
  .then((accounts) => viewAccounts(accounts.data));
  }, []);
  return (
    <><table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#Id</th>
          <th scope="col">Status</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>  {accounts.map((account , key) => (
           <><th scope="row">{key}</th>
             <td>{account.id}</td>
             <td>{account.status}</td>
             <td>{account.balance}</td></>
        ))}
         
        </tr>
        </tbody>
      </table></>
    );
    
    }
    


  //return <div>DASHBOARD</div>;


