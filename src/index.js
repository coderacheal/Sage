import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

// d608f15d2a7a969d4c4ccdbede20086c

const root = ReactDOM.createRoot(document.getElementById('root'));
// const currency = 'USDTUSD';
// const BASEURL = `https://api.waqi.info/feed/${city}/?token=bd3d59858e92f01c1dfcbb87eb2193ee226e7ade`;

// const BASEURL = `https://financialmodelingprep.com/api/v3/historical-price-full/crypto/BTCUSD?apikey=d608f15d2a7a969d4c4ccdbede20086c`
// const BASEURL = `https://financialmodelingprep.com/api/v3/historical-price-full/crypto/${currency}?apikey=d608f15d2a7a969d4c4ccdbede20086c`;

// Ethereum (ETH), Ripple (XRP), Litecoin (LTC), Bitcoin Cash (BCH), Bitcoin(BTC)

// const getcity = async () => {
//   const response = await axios.get(BASEURL);
//   console.log(response.data);
// };

// getcity();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);

// http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid={API key}
