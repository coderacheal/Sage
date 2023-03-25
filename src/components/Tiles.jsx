import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCryptoData } from '../redux/currencySlice';

const Tiles = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCryptoData());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filtering = crypto.filter((coin) => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ));

  return (
    <div data-test-id="tiles">
      <h1>SMART CRYPTO</h1>
      <input type="text" className="search" value={search} placeholder="Search for a currency..." onChange={handleSearch} />
      <div className="allCryto">
        {filtering.map((eachCoin) => (
          <div key={eachCoin.id} className="individualCryptoTile">
            <img src={eachCoin.image.small} alt={eachCoin.name} />
            <p>{eachCoin.name}</p>
            <Link to={`/crypto/${eachCoin.id}`}>
              <i className="fa-solid fa-arrow-right" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
