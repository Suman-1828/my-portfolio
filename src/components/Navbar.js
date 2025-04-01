import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Suman Kumar</a>
        <div className="navbar-menu">
          <a href="#home" className="navbar-item">Home</a>
          <a href="#experience" className="navbar-item">Experience</a>
          <a href="#skills" className="navbar-item">Skills</a>
          <a href="#education" className="navbar-item">Education</a>
          <a href="#contact" className="navbar-item">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;