import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCryptoData } from '../redux/currencySlice';

const Tile = () => {
  const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch]);

  return (
    <div>
      <div className="NavBar">
        <h1 className="brand">
          SMART CRYPTO
        </h1>
      </div>
      <div className="allCryto">
        {crypto.map((each) => (
          <div key={each.id} className="individualCryptoTile">
            {each.name}
            <i className="fa-solid fa-arrow-right" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tile;
