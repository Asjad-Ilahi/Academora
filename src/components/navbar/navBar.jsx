import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';  // Adjust path to match your folder structure
import './navBar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="Academora Logo" width={32} height={32} />
            <span>Academora</span>
          </Link>
          
          <div className="navbar-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/universities" className="nav-link">Universities</Link>
            <Link to="/explore" className="nav-link">Explore</Link>
            <Link to="/about-us" className="nav-link about-link">About Us</Link>
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