import { useState, useEffect } from "react";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";

export default function Home() {
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    setAccessToken(token);
  }, []);

<<<<<<< HEAD
  return accessToken ?  <Login />:<Dashboard />;
=======
  return accessToken ? <Login />:<Dashboard />;
>>>>>>> 9d0fb713c8da7e0cc810da86287d54c11c8981ec
}
