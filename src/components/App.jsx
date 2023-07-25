import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tiles from './Tiles';
import CryptoDetails from './cryptoDetails';
import HomePage from './HomePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/crypto/:CryptoId" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
