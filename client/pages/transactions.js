import React from "react";

export default function transactions() {
  const [transactions, viewTransactions] = useState([]);
useEffect(() => {
console.log("Mounting!");
axios
.get(`http://localhost:5000/transactions/${accountId}`)
.then((response) => viewTransactions(response.data));
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
      transactions.map((transaction , key) => (
         <><th scope="row">{key}</th>
           <td>{transaction.Display_date}</td>
           <td>{account.credit}</td>
           <td>{account.debit}</td>
           <td>{account.amount}</td>
           </>
      ))}
      </tr>
      </tbody>
    </table>
    </div>
  );
  
  }

