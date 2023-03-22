import React from 'react';

const Navbar = () => {
  const currencies = [
    { name: 'BITCOIN' }, { name: 'Ethereum ' }, { name: 'Tether' }, { name: 'BNB' }, { name: 'USD Coin' }, { name: 'XRP ' }, { name: 'Cardano' }, { name: 'Polygon' }, { name: 'DogeCoin' }, { name: 'Binance' }, { name: 'Solana' }, { name: 'Polkadot' }, { name: 'StorX' }, { name: 'MELX' },
  ];

  return (
    <div className="NavBar">
      <div className="brand">SMART CRYPTO</div>
      <select className="select">
        <option value="" disabled selected hidden>Select a Crypto Currency</option>
        {currencies.map((each) => (
          <option key={each.name}>{each.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
