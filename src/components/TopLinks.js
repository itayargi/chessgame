import React from "react";
import { Link } from "react-router-dom";


export default function TopLinks() {
  return (
    <div id="links" style={{height:50, backgroundColor:"orange", paddingTop:10}}>
      

        <Link
          className="linkStyle"
          style={{ fontSize: 20, color: "black" }}
          to="/"
        >
         connect
        </Link>
        <Link
          className="linkStyle"
          style={{ fontSize: 20, color: "black",marginLeft:50 }}
          to="/SignIn"
        >
         Sign in
        </Link>
        <Link
          className="linkStyle"
          style={{ fontSize: 20, color: "black" , marginLeft:50}}
          to="/Login"
        >
          Log in
        </Link>
        {/* <Link
          className="linkStyle"
          style={{ fontSize: 20, color: "black" , marginLeft:50}}
          to="/Welcome"
        >
          Welcome
        </Link> */}
        {/* <Link
          className="linkStyle"
          style={{ fontSize: 20, color: "black" , marginLeft:50}}
          to="/Manager"
        >
          Manager
        </Link> */}
     
    </div>
  );
}
