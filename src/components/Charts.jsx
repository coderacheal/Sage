import { Bar } from 'react-chartjs-2';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import Navbar from './NavBar';
import { getCurrencyDetails } from '../redux/currencySlice';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

const CryptoChart = () => {
  const { CryptoId } = useParams();
  const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCurrencyDetails(CryptoId));
  }, [dispatch, CryptoId, crypto]);

  const clickedCoin = crypto.filter((coin) => coin.id === CryptoId);

  // handle the case when the array is empty or not available
  const marketData = clickedCoin[0]?.market;

  const userData = {
    labels: ['Last hour', 'Last 24hrs', 'Last 7 days', 'Last 14 days', 'Last30 days', 'Last 60 days', 'Last 200 days', 'Last 1 year'],
    datasets: [
      {
        label: 'Percentage change of price',
        data: [
          marketData?.price_change_percentage_1h_in_currency?.usd,
          marketData?.price_change_percentage_24h_in_currency?.usd,
          marketData?.price_change_percentage_7d_in_currency?.usd,
          marketData?.price_change_percentage_14d_in_currency?.usd,
          marketData?.price_change_percentage_30d_in_currency?.usd,
          marketData?.price_change_percentage_60d_in_currency?.usd,
          marketData?.price_change_percentage_200d_in_currency?.usd,
          marketData?.price_change_percentage_1y_in_currency?.usd,
        ],
        backgroundColor: 'aqua',
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <Link to="/">Back</Link>
      <div style={{ width: '70%', margin: '30px auto' }}>
        <Bar
          data={userData}
        />
      </div>

    </div>
  );
};

export default CryptoChart;
