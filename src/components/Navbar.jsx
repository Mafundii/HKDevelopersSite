import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu} // Close menu on navigation
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu} // Close menu on navigation
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu} // Close menu on navigation
          >
            Contact
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu} // Close menu on navigation
          >
            Reviews
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            onClick={closeMenu} // Close menu on navigation
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
      <button className="burger-button" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
    </nav>
  );
}

export default Navbar;
