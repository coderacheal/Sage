import React from 'react';
import Navbar from './NavBar';
import Tiles from './Tiles';
import Footer from './Footer';
// import CryptoChart from './CryptoChart';

const HomePage = () => (
  <div className="homepage">
    <Navbar />
    <Tiles />
    <Footer />
  </div>
);

export default HomePage;
