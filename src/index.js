import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import axios, { all } from 'axios';

const root = ReactDOM.createRoot(document.getElementById('root'));
const BASEURL = 'https://api.coingecko.com/api/v3/coins/';
const getData =  async () => {
  const response = await axios.get(BASEURL)
  const alldata = await response.data
  console.log(alldata)
}

getData()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
