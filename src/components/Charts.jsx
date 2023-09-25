import { Bar } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
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
  const [aspectRatio, setAspectRatio] = useState(2);

  useEffect(() => {
    dispatch(getCurrencyDetails(CryptoId));

    const updateAspectRatio = () => {
      const screenWidth = window.innerWidth;
      // Set the desired aspect ratio based on the screen width
      if (screenWidth <= 768) {
        setAspectRatio(2);
      } else {
        setAspectRatio(2);
      }
    };

    // Call the function to set the initial aspect ratio
    updateAspectRatio();

    // Event listener to update aspect ratio on window resize
    window.addEventListener('resize', updateAspectRatio);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateAspectRatio);
    };
  }, [dispatch, CryptoId]);

  const clickedCoin = crypto.filter((coin) => coin.id === CryptoId);
  // handle the case when the array is empty or not available
  const marketData = clickedCoin[0]?.market;

  const userData = {
    labels: ['Last hour', 'Last 24hrs', 'Last 7 days', 'Last 14 days', 'Last 30 days', 'Last 60 days', 'Last 200 days', 'Last 1 year'],
    datasets: [
      {
        label: `Percentage change of price in USD ($) for ${clickedCoin[0].name} `,
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

  const options = {
    aspectRatio,
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 18,
          },
        },
      },
    },
  };

  return (
    <div>
      <Navbar />
      <Link to="/" className="back-btn">Back</Link>
      <div style={{ width: '70vw', margin: '30px auto' }} className="barElement">
        <Bar
          data={userData}
          options={options}
        />
      </div>

    </div>
  );
};

export default CryptoChart;
