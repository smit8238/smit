import React from 'react'
import './Home1.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
        <header className="header">
        <h1>Adam Halls</h1>
        <nav className="nav">
          <Link to="/Home">Home</Link>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/About">About</Link>
          <Link to="/Content">Contact</Link>
          <Link to="/Shop">Shop</Link>
        </nav>
        <div className="icons">
          <span className="search-icon">🔍</span>
          <span className="cart-icon">🛒</span>
        </div>
      </header>
      
    </div>
  )
}
