import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CryptoDetails from './cryptoDetails';
import HomePage from './HomePage';
import CryptoChart from './CryptoChart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crypto/:CryptoId/" element={<CryptoDetails />} />
          <Route path="/crypto/visualise/:CryptoId" element={<CryptoChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
