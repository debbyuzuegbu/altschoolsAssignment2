import React from "react";
import "./pages.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <div className="container">
      <div className="page">
        <h1>
          Find an Email in seconds
        </h1>
        <p className="PageDetails">Access to thousands of email addresses</p>
        <NavLink to="user" style={{padding:"8px", textDecoration:"none", border:"none", color:"#dafff6", backgroundColor:"#006b6c", borderRadius: "5px", marginLeft:"100px", marginTop:"300px"}}>Get Started</NavLink>
      </div>
      <div>
          <img
            className="email"
            alt="email"
            src="	https://i.pinimg.com/564x/e9/80/84/e980845822fc6cca01ea900b64cdbcaa.jpg"
          />
      </div>
    </div>
    </div>
    
  );
}

export default Home;
