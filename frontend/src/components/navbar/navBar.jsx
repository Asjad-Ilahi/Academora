import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg'; // Adjust path to match your folder structure

import './navBar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Reset menu state on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false); // Close the menu on larger screens
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup listener on component unmount
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <button className="menu-toggle" onClick={toggleMenu}>
            <span className="menu-icon">&#9776;</span>
          </button>

          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Academora Logo" width={32} height={32} />
            <span>Academora</span>
          </Link>

          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/universities"
              className={`nav-link ${isActive('/universities') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Universities
            </Link>
            <Link
              to="/explore"
              className={`nav-link ${isActive('/explore') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              to="/about-us"
              className={`nav-link about-link ${isActive('/about-us') ? 'active-link' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </div>

          <div className="navbar-buttons">
            <button className="btn btn-ghost">
              <Link to="/sign-in">Sign In</Link>
            </button>
            <button className="btn btn-primary">
              <Link to="/sign-up">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
