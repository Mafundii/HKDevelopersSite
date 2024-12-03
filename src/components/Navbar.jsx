import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Get current page name from route
  const location = useLocation();
  const pageNames = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/reviews": "Reviews",
    "/portfolio": "Portfolio",
  };
  const currentPage = pageNames[location.pathname] || "Page";

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Listen to resize events
    return () => window.removeEventListener("resize", handleResize); // Cleanup listener
  }, []);

  return (
    <nav className="navbar">
      {/* Show page name only on mobile */}
      {isMobile && <div className="navbar-page-name">{currentPage}</div>}

      {/* Navigation Links */}
      <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            HOME
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            ABOUT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            CONTACT
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            REVIEWS
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/portfolio"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            PORTFOLIO
          </NavLink>
        </li>
      </ul>

      {/* Burger Button */}
      <button className="burger-button" onClick={toggleMenu}>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
        <span className="burger-line"></span>
      </button>
    </nav>
  );
}

export default Navbar;
