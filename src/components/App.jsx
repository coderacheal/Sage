import '../styles/App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import CryptoDetails from './cryptoDetails';
// import HomePage from './HomePage';
import React, { useState } from 'react';
import BarChart from './Barchart';
import { UserData } from './Data';
// import CryptoChart from './CryptoChart';

// import Charts from './Charts';

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: 'Users Gained',
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  });
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crypto/:CryptoId/" element={<CryptoDetails />} />
          <Route path="/crypto/visualise/:CryptoId" element={<CryptoChart />} />
          <Route path="/crypto/visualise/:CryptoId" element={<Charts />} />
        </Routes>
      </BrowserRouter> */}
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
    </div>
  );
}

export default App;
