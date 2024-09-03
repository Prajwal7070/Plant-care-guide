import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="./images/logo.jpg" alt="logo" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Link to="/login"><button>Login</button></Link>
    </nav>
  );
};

export default Navbar;
