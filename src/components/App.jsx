import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tile from './Tile';
import CryptoDetails from './cryptoDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="" element={<Tile />} /> */}
          <Route path="/" element={<CryptoDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
