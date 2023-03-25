import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="Nav">
    <div><NavLink to="/"><i className="fa-solid fa-arrow-left" /></NavLink></div>
    <div>
      <h1 className="brand">SMART CRYPTO</h1>
    </div>
  </nav>
);

export default Navbar;
