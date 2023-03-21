import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: ['BITCOIN', 'ETHERIUM'],
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

export default currencySlice.reducer;
