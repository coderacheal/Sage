import { configureStore } from '@reduxjs/toolkit';
import currencyReducer from './currencySlice';

const store = configureStore({
  reducer: {
    crypto: currencyReducer,
  },
});

export default store;
