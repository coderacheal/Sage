import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tiles from './Tiles';
import CryptoDetails from './cryptoDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tiles />} />
          <Route path="/crypto/:name" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
