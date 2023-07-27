import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import CryptoDetails from './cryptoDetails';
import HomePage from './HomePage';
import Charts from './Charts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crypto/:CryptoId/" element={<CryptoDetails />} />
          <Route path="/crypto/visualise/:CryptoId" element={<Charts />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
