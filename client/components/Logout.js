import { Button } from "reactstrap";
//import React from "react";

export default function Logout() {

    const handleLogout= ()=>{
        window.localStorage.removeItem("jwt"),
        window.localStorage.removeItem("user"),
        window.localStorage.removeItem("accountid"),
        window.location.replace("http://localhost:3000")
    };

  return(  
  <div>
    <a href = "http://localhost:3000">Logout</a> 
  </div>
  
  );
}
