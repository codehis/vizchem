import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.png";
import Scontact from "./Scontact";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [Show, SetShow] = useState(false);
  const [home, SetHome] = useState();

  const Follow = () => {
    SetHome("mobile-menu");
    SetShow(!Show);
  };

  return (
    <React.Fragment>
      <div className="nav-bar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/Product&Services">Product&Services</NavLink>
          {/* <NavLink to="/Product">Product</NavLink> */}
          {/* <NavLink to="/About">About Us</NavLink> */}
          <NavLink to="/Contact">Contact Us</NavLink>
        </div>

        <div className="mobile">
          <a href="#" onClick={Follow}>
            <MenuIcon className="icon" />
          </a>
        </div>
      </div>
      <hr />

      <Scontact />

      <hr />
      <div className="go">
      <div className={Show ? { home }.home : "hmenu"}>
       
       <NavLink to="/" id='name'>
         Home
       </NavLink>

       <NavLink to="/Product&Services" id="name">
         Product&Services
       </NavLink>
       {/* <NavLink to="/Product">Product</NavLink> */}
       {/* <NavLink to="/About">About Us</NavLink> */}
       <NavLink to="/Contact" id="name">
         Contact Us
       </NavLink>
   
   </div>
      </div>
   
    
   
     
     
      
    </React.Fragment>
  );
};

export default Navbar;
