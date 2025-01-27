import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import logo from '../assets/logo.png'; // Adjust path if needed

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Brand Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <a href="#">Carnes</a>
        <a href="#">Pollo</a>
        <a href="#">Pescados</a>
        <a href="#">Mariscos</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;