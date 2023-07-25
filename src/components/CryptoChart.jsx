import React from 'react';
import { Chart } from 'chart.js';
import { useSelector } from 'react-redux';

const CryptoChart = () => {
  const { crypto } = useSelector((store) => store.crypto);

  // Extract the relevant data for the chart from the `crypto` variable
  const labels = crypto.map((entry) => entry.time);
  const prices = crypto.map((entry) => entry.market.current_price.aud);

  // Chart configuration
  const chartConfig = {
    type: 'bar', // Change to the chart type you want (line, bar, pie, etc.)
    data: {
      labels,
      datasets: [
        {
          label: 'Bitcoin Price (AUD)',
          data: prices,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    options: {
      // Add any chart options and configurations here
      // For example, you can set title, tooltips, scales, etc.
    },
  };

  // Chart ref to get the canvas context
  const chartRef = React.useRef(null);

  // Create the chart after the component mounts
  React.useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    new Chart(ctx, chartConfig);
  }, []);

  return <canvas ref={chartRef} />;
};

export default CryptoChart;
