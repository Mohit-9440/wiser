import React from "react";

import "./navbar.css";
import Logo from "../../assets/logo.png";
import Avatar from "../../assets/avatar.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-middle">
        <div className="navbar-middle-main">Recent Event ID</div>
      </div>
      <div className="navbar-right">
        <div className="navbar-right-main">
          <div className="navbar-right-main-icon"><img src={Avatar} alt=""/></div>
          <div className="navbar-right-main-con">
            <div className="navbar-right-main-con-head">Test User</div>
            <div className="navbar-right-main-con-subhead">abc@work.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
