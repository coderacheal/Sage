import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <div>
      <Link to="/"><i className="fa-solid fa-arrow-right" /></Link>
      <h1 className="brand">SMART CRYPTO</h1>
    </div>
  </div>
);

export default Navbar;
