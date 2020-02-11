import React from 'react'
import { Link } from "react-router-dom";

export default function Connect() {
    return (
        <div>
            <h2>Logistics Management</h2>
            <br/><br/>
            <Link
          className="linkStyle"
          style={{ fontSize: 20, color: "#fff", borderRadius:5, padding:5, textDecoration:"none" ,border:'solid', backgroundColor:"blue", borderColor:"grey"}}
          to="/SignIn"
        >
         Sign in
        </Link>
        <Link
          className="linkStyle"
          style={{ fontSize: 20, color: "#fff",marginLeft:50,borderRadius:5, padding:5, textDecoration:"none" ,border:'solid', backgroundColor:"blue", borderColor:"grey"}}
          to="/Login"
        >
          Log in
        </Link>


        </div>
    )
}
