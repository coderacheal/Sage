import React from 'react';

const CryptoDetails = () => (
  <div>
    <input className="date-selection" type="date" />
    <div className="dailyData">
      <div>BitCoin</div>
      <div>BTC/USD</div>
      <div>
        <div>Open: $25,000</div>
        <div>Close: $23,000</div>
      </div>
    </div>
  </div>
);

export default CryptoDetails;
