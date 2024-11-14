
import React, { useState } from 'react';
import '../Css/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://www.deepnetsoft.com/images/logo.png" alt="Deep Net Soft" />
      </div>
      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="/home">Home</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/reservation">Make a Reservation</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
