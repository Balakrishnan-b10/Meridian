import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header/Header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <h1 className="logo">Meridian Machine Works</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/machines">Machines</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;