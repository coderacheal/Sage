import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
// import axios from 'axios';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

// d608f15d2a7a969d4c4ccdbede20086c

const root = ReactDOM.createRoot(document.getElementById('root'));

// const BASEURL = 'https://api.coingecko.com/api/v3/coins/';

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
