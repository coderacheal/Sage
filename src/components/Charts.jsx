import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { UserData } from './Data';

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import Navbar from './NavBar';
import { getCurrencyDetails } from '../redux/currencySlice';
import { Link } from "react-router-dom";

const CryptoChart = () => {
  const { CryptoId } = useParams();
  const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCurrencyDetails(CryptoId));
  }, [dispatch, CryptoId, crypto]);

  const clickedCoin = crypto.filter((coin) => coin.id === CryptoId);
  console.log(clickedCoin);

  // handle the case when the array is empty or not available
  const marketData = clickedCoin[0]?.market;
  console.log(marketData);


  const [userData, setUserData] = useState({
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
  });


  return (
    <div>
      <Navbar />
      <Link to={"/"}>Back</Link>
      <div style={{ width: '70%', margin: '30px auto'}}>
        <Bar
            data={userData}
        />
      </div>
      
    </div>
  );

//   const [userData, setUserData] = useState({
//    
//     datasets: [
//         {
//             label: 'Crypto Data',
//             data: UserData.map((data) => data.userGain),
//             backgroundColor: [
//               'rgba(75,192,192,1)',
//               '#ecf0f1',
//               '#50AF95',
//               '#f3ba2f',
//               '#2a71d0',
//             ],
//             borderColor: 'red',
//             borderWidth: 2,
//           },
//     ]
//   })
 
//   const data = {
//     labels: ['Last hour', 'Last 24hrs', 'Last 7 days', 'Last 14 days',
//       ' Last30 days', 'Last 60 days', 'Last 200 days', 'Last 1 year'],
//     datasets: [
//       {
//         label: `Price changes in percentage ($USD) for ${clickedCoin[0].name}`,
//         data: [
//           marketData?.price_change_percentage_1h_in_currency?.usd,
//           marketData?.price_change_percentage_24h_in_currency?.usd,
//           marketData?.price_change_percentage_7d_in_currency?.usd,
//           marketData?.price_change_percentage_14d_in_currency?.usd,
//           marketData?.price_change_percentage_30d_in_currency?.usd,
//           marketData?.price_change_percentage_60d_in_currency?.usd,
//           marketData?.price_change_percentage_200d_in_currency?.usd,
//           marketData?.price_change_percentage_1y_in_currency?.usd,
//         ],
//         backgroundColor: 'aqua',
//         borderColor: 'black',
//         borderWidth: 1,
//       },

//     ],
//   };

//   const options = {

//   };
  
};

export default CryptoChart;
