import React from 'react';
import { useSelector } from 'react-redux';

const Tile = () => {
  const { currencies } = useSelector((store) => store.crypto);

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
