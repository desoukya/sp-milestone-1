import React, { useEffect, useState } from 'react';
import apiService from "../services/apiService";


export default function Dashboard() {
  const [Transactions, viewTransactions] = useState([]);
  useEffect(async () => {
    console.log("Mounting!");
    const accountId = localStorage.getItem("account")
    const response = await apiService.get(`http://localhost:5000/transactions/${accountId}`)
    console.log(response)
    viewTransactions(response.data)
},[]);
 
  return (
    <div>
      <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Transaction name</th>
          <th scope="col">Credit</th>
          <th scope="col">Debit</th>
          <th scope="col">Ammount</th>
        </tr>
      </thead>
      <tbody>
        <tr>  {
        Transactions.map((Transaction , key) => (
           <><th scope="row">{key}</th>
             <td>{Transaction.Display_date}</td>
             <td>{Transaction.name}</td>
             <td>{Transaction.credit}</td>
             <td>{Transaction.debit}</td>
             <td>{Transaction.amount}</td>
             
    
             </>

        ))}
        </tr>
        </tbody>
      </table>
      </div>
    );
    
    }
