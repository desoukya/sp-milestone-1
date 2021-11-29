import React, { useEffect, useState } from 'react';
import apiService from "../services/apiService";


export default function Dashboard() {
  const [accounts, viewAccounts] = useState([]);
  useEffect(async () => {
    console.log("Mounting!");
    const response = await apiService.get('http://localhost:5000/accounts/15')
    console.log(response)
    viewAccounts(response.data)
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


