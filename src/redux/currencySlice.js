import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  crypto: [],
};

const BASEURL = 'https://api.coingecko.com/api/v3/coins/';

export const getCryptoData = createAsyncThunk('data/getCryptoData', async () => {
  const response = await axios.get(BASEURL, {
    headers: {
      'Access-Control-Allow-Origin': '',
      'Access-Control-Allow-Headers': 'Host, Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,X-XSRF-TOKEN, Origin, Access-Control-Request-Origin, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin, access-control-allow-origin, Access-Control-Allow-Credentials, access-control-allow-credentials, Access-Control-Allow-Headers, access-control-allow-headers, Access-Control-Allow-Methods, access-control-allow-methods',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
  const crytoData = response.data;
  return crytoData.map((each) => (
    {
      id: each.id,
      name: each.name,
      symbol: each.symbol,
      image: each.image,
      time: each.last_updated,
      market: each.market_data,
      // ranking: each.market_data.market_cap_rank,
      // show: false,
    }
  ));
});

const currencySlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    getCurrencyDetails: (state, action) => {
      const id = action.payload;
      state.crypto.map((coin) => {
        if (coin.id === id) {
          return coin;
        } return 'No such Coin!';
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCryptoData.fulfilled, (state, action) => ({
        ...state,
        crypto: action.payload,
      }
      ));
  },
});

export const { getCurrencyDetails } = currencySlice.actions;
export const { getdetails } = currencySlice.actions;
export default currencySlice.reducer;
