import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import CryptoDetails from './cryptoDetails';
import HomePage from './HomePage';
import BarChart from './Barchart';
import { UserData } from './Data';
import Charts from './Charts';

function App() {
  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: 'Users Gained',
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         'rgba(75,192,192,1)',
  //         '#ecf0f1',
  //         '#50AF95',
  //         '#f3ba2f',
  //         '#2a71d0',
  //       ],
  //       borderColor: 'red',
  //       borderWidth: 2,
  //     },
  //   ],
  // });
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
