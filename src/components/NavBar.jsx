import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="Nav">
    <NavLink to="/">Back</NavLink>
    <div>
      <h1 className="brand">SAGE</h1>
    </div>
  </nav>
);

export default Navbar;
