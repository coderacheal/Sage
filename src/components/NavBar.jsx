import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="Nav">
    <ul>
      <li><NavLink to="/">Back</NavLink></li>
      <li><h1 className="brand">SAGE</h1></li>
    </ul>
  </nav>
);

export default Navbar;
