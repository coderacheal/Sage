import React from 'react';

const Tile = () => {
  const currencies = [
    { name: 'BITCOIN' }, { name: 'Ethereum ' }, { name: 'Tether' }, { name: 'BNB' }, { name: 'USD Coin' }, { name: 'XRP ' }, { name: 'Cardano' }, { name: 'Polygon' }, { name: 'DogeCoin' }, { name: 'Binance' }, { name: 'Solana' }, { name: 'Polkadot' }, { name: 'StorX' }, { name: 'MELX' },
  ];

  return (
    <div>
      <div className="allCryto">
        {currencies.map((currency) => (
          <div key={currency.name} className="individualCryptoTile">{currency.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Tile;
