import React from 'react'
import "./pages.css"
import { NavLink } from "react-router-dom"

function AboutUs() {
  return (
    <div className="ImageCenter">
        <h1>About MailToYou</h1>
        <p>Welcome to MailToYou</p>
        <p>Find here any random email of your choice, feel free to use it for marketing purposes</p>
        <NavLink to="policy" style={{padding:"8px", textDecoration:"none", border:"none", color:"#dafff6", backgroundColor:"#006b6c", borderRadius: "5px", marginLeft:"100px", marginTop:"300px"}}>PolicyPage</NavLink>
    </div>
  )
}

export default AboutUs