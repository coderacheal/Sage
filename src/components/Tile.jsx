import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { getCryptoData } from '../redux/currencySlice';
// import store from '../redux/store';

const Tile = () => {
  // const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);
  // const { status } = useSelector((store) => store.crypto);

  // useEffect(() => {
  //   dispatch(getCryptoData());
  // }, [dispatch, crypto]);

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
