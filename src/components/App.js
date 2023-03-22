import '../styles/App.css';
import Navbar from './Navbar';
import CurrencyTiles from './AllCurrencyTiles';
import CryptoDetails from './cryptoDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CurrencyTiles /> */}
      <CryptoDetails />
    </div>
  );
}

export default App;
