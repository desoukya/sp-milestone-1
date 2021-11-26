import React from "react";

export default function Dashboard() {
  const [accounts, viewAccounts] = useState([]);
  useEffect(() => {
  console.log("Mounting!");
  axios
  .get(`http://localhost:5000/accounts/${userid}`)
  .then((response) => viewTransactions(response.data));
  }, []);



  return <div>DASHBOARD</div>;
}
