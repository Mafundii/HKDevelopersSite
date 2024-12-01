import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="nav-item">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Home
          </NavLink>
          <div className="highlight-bar"></div>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            About
          </NavLink>
          <div className="highlight-bar"></div>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Contact
          </NavLink>
          <div className="highlight-bar"></div>
        </li>
        <li className="nav-item">
          <NavLink to="/reviews" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Reviews
          </NavLink>
          <div className="highlight-bar"></div>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            Portfolio
          </NavLink>
          <div className="highlight-bar"></div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
