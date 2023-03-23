import '../styles/App.css';
import Navbar from './Navbar';
// import CurrencyTiles from './CurrencyTiles';
import Tile from './Tile';
// import CryptoDetails from './cryptoDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tile />
      {/* <CurrencyTiles /> */}
      {/* <CryptoDetails /> */}
    </div>
  );
}

export default App;
