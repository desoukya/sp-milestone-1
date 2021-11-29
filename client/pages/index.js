import { useState, useEffect } from "react";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import Register from "../pages/register"

export default function Home() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    setAccessToken(token);
  }, []);
  return <Register/>
  //return accessToken ? <Dashboard /> : <Login />;
}
