import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import TransactionList from "../components/TransactionList";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { renderMatches } from "react-router";





export default function transactions() {
      
 
  return (
  <div>
    
   { /* ADD LOGIC HERE */}
    <h1 style = {{textAlign:"center"}}className="p-3 mb-2 bg-info text-white">Account Transcations</h1>
    
    <p className="text-info">Account Id: </p>
    <input type="Account ID" className="form-control" id="exampleInputID" aria-describedby="IDHelp" placeholder="123an"/>
    <p className="text-info">Name: </p>
    <input type="Name" className="form-control" id="exampleInputName" aria-describedby="IDHelp" placeholder="alina"/>
    <p className="text-info" >Balance: </p>
    <input type="Balance" className="form-control" id="exampleInputBalance" aria-describedby="IDHelp" placeholder="1500"/>
    
    
    
    
  <table className="table table-info  table-bordered  " >
  <thead >
  <tr >
      <th scope="col">Date</th>
      <th scope="col">Transcation Name</th>
      <th scope="col">Debit</th>
      <th scope="col">credit</th>
      <th scope="col">Total amount</th>
    </tr>
  </thead>
  <tbody>
    <tr >
      <th scope="row">11-11</th>
      <td>aa</td>
      <td>no</td>
      <td>yes</td>
      <td>1000</td>
    </tr>
    <tr>
      <th scope="row">22-1</th>
      <td>T1</td>
      <td>yes</td>
      <td>no</td>
      <td>-500000</td>
    </tr>
    <tr >
      <th scope="row">3-1</th>
      <td>T200</td>
      <td>no</td>
      <td>yes</td>
      <td>12000</td>
    </tr>
  </tbody>
</table>
    
    
    </div>
    
    
    
    
    );}
