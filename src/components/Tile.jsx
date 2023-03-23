import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';
import { getCryptoData } from '../redux/currencySlice';

const Tile = () => {
  const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch, crypto]);

  return (
    <div>
      <div className="allCryto">
        {crypto.map((each) => (
          <div key={each.id} className="individualCryptoTile">{each.name}</div>
        ))}
      </div>
    </div>
  );
};

// Tile.propTypes = {
//   book: PropTypes.shape({
//     id: PropTypes.string,
//     title: PropTypes.string,
//     author: PropTypes.string,
//     category: PropTypes.string,
//   }).isRequired,
// };

export default Tile;
