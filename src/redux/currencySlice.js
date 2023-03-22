import { createSlice, AsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  currencies: [
    { name: 'BITCOIN' }, { name: 'Ethereum ' }, { name: 'Tether' }, { name: 'BNB' }, { name: 'USD Coin' }, { name: 'XRP ' }, { name: 'Cardano' }, { name: 'Polygon' }, { name: 'DogeCoin' }, { name: 'Binance' }, { name: 'Solana' }, { name: 'Polkadot' },
  ],
};

const currencySlice = createSlice({
  name: crypto,
  initialState,
  reducers: {
    getcurrency: () => {
      console.log('hello');
    },
  },
});


// const currencySlice = createSlice({
//   name: crypto,
//   initialState,
//   reducers: {
//     getcurrency: () => {
//       console.log('hello');
//     },
//   },
// });

export default currencySlice.reducer;
