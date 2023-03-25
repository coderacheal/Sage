import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

const BASEURL = 'https://api.coingecko.com/api/v3/coins/';

const getcity = async () => {
  const response = await axios.get(BASEURL);
  console.log(response.data);
};

getcity();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
