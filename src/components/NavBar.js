import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { crypto } = useSelector((store) => store.crypto);

  return (
    <div>
      <div>
        <h1 className="brand">SMART CRYPTO</h1>
      </div>
    </div>
  );
};

export default Navbar;
