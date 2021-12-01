import React, { useEffect, useState } from 'react';
import apiService from "../services/apiService";
import Table from 'react-bootstrap/Table'
import Logout from './Logout';


export default function Dashboard() {
  const [accounts, viewAccounts] = useState([]);
  
  useEffect(async () => {
    console.log("Mounting!");
    const user = JSON.parse(localStorage.getItem("user")).userId;
    const response = await apiService.get(`http://localhost:5000/accounts/${user}`)
    viewAccounts(response.data)
},[]);


  //   const calculateBalance = (accountid) => {
  //     const response =  apiService.get(`http://localhost:5000/accounts/user/balance/${accountid}`);
  //     setBalance(response);
  //     console.log(response?"not empty":"empty");
  // }
    
 
  return (
    <div>
      <Logout/>
      <Table  striped bordered hover>
      <thead className="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Status</th>
          <th scope="col">Transactions</th>
        </tr>
      </thead>
      <tbody>{
        accounts.map((account , key) => (
        <tr>  
           <><td>{key}</td>
             <td>{account.status}</td>
              <button onClick={()=>{
                  localStorage.setItem("accountid", account.accountid),
                  window.location.replace("http://localhost:3000/transactions")
                }}>View Details</button>
             </>
      
        </tr>  ))}
        </tbody>
      </Table>
      </div>
    );
    
    }
  

  //return <div>DASHBOARD</div>;


