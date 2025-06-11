import { useEffect, useState } from "react";
import { CART_LOGO, LOGO_URL } from "../utils/constants";

const Header=()=>{

    const [btnName, setBtnName]=useState("Login");

    useEffect(()=>{
        console.log("useeffect called");
    },[]);

    return(
      <div className="header">
      <div className="logo-container">
       <img className="logo" src={LOGO_URL} alt="food app logo" />
      </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li><img src={CART_LOGO} /></li>
        <button className="login" onClick={()=>{ 
            btnName=="Login" ? setBtnName("Logout"): setBtnName("Login")
        }}>{btnName}</button>
      </ul>
    </div>
      </div>
    )
  }
  
  export default Header;