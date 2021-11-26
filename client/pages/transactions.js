import React from "react";

export default function transactions() {
  const [transactions, viewTransactions] = useState([]);
useEffect(() => {
console.log("Mounting!");
axios
.get(`http://localhost:5000/transactions/${accountId}`)
.then((response) => viewTransactions(response.data));
}, []);
  return <div>{/* ADD LOGIC HERE */
<div class="container">
  <h2>Basic Table</h2>
  <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>            
  <table class="table">
    <thead>
      <tr>
        <th>Date</th>
        <th>Transaction Name</th>
        <th>Debit</th>
        <th>Credit</th>
        <th>ammount</th>
        <th>Account ID</th>
      </tr>
    </thead>
    <tbody>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="ID" variant="outlined" value={transaction.Display_Date} 
      />
      <TextField id="outlined-basic" label="Name" variant="outlined" value={student.studentName} />
      <TextField id="outlined-basic" label="Grade" variant="outlined" value={student.grade} />
      <TextField id="outlined-basic" label="Major" variant="outlined" value={student.section} />
      <Button variant="contained" color="primary" onClick = {(CreateStudent)}>
        Create
      </Button>
    </form>
    </tbody>
  </table>
</div>



    
  }</div>;
}
