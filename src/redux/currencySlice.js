import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  crypto: [],
  status: false,
};

const BASEURL = 'https://api.coingecko.com/api/v3/coins/';

export const getCryptoData = createAsyncThunk('data/getCryptoData', async () => {
  const response = await axios.get(BASEURL);
  const crytoData = response.data;
  return crytoData.map((each) => (
    {
      id: each.id,
      name: each.name,
      image: each.image,
    }
  ));
});

const currencySlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoData.fulfilled, (state, action) => ({
        ...state,
        crypto: action.payload,
      }));
  },
});

export default currencySlice.reducer;
