import React from 'react';
import './LogoContainer.css';
import logo from "../assets/HK_DEVELOPERS.png";

function LogoContainer() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Logo" className="navbar-logo" />
    </div>
  );
}

export default LogoContainer;