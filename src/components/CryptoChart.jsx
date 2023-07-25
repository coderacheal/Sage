import React from 'react';
import { Chart } from 'chart.js';
import { useSelector } from 'react-redux';

import { BarController, BarElement } from 'chart.js';


const CryptoChart = () => {
//   const { crypto } = useSelector((store) => store.crypto);

//   // Extract the relevant data for the chart from the `crypto` variable
//   // const labels = crypto.map((entry) => entry.market.);
//   const labels = ['1hr'];
//   const prices = crypto.map((entry) => entry.market.price_change_percentage_24);

//   // Chart configuration
//   const chartConfig = {
//     type: 'bar', // Change to the chart type you want (line, bar, pie, etc.)
//     data: {
//       labels,
//       datasets: [
//         {
//           label: 'Price change percentage %',
//           data: prices,
//           backgroundColor: 'rgba(75, 192, 192, 0.2)',
//           borderColor: 'rgba(75, 192, 192, 1)',
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       // Add any chart options and configurations here
//       // For example, you can set title, tooltips, scales, etc.
//     },
//   };

//   // Chart ref to get the canvas context
//   const chartRef = React.useRef(null);

//   // Create the chart after the component mounts
//   // React.useEffect(() => {
//   //   const ctx = chartRef.current.getContext('2d');
//   //   new Chart(ctx, chartConfig);
//   // }, []);

//   // Inside CryptoChart component
//   React.useEffect(() => {
//     const ctx = chartRef.current.getContext('2d');
//     const myChart = new Chart(ctx, chartConfig);

//     // Cleanup: Destroy the chart when the component unmounts
//     return () => {
//       myChart.destroy();
//     };
//   }, []);


//   return <canvas ref={chartRef} />;
// };


  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

export default CryptoChart;
