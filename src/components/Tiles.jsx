import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCryptoData } from '../redux/currencySlice';
import Navbar from './NavBar';

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
    <div>
      <Navbar />
      <input type="text" value={search} onChange={handleSearch} />
      <div className="allCryto">
        {filtering.map((eachCoin) => (
          <div key={eachCoin.id} className="individualCryptoTile">
            <img src={eachCoin.image.small} alt={eachCoin.name} />
            {eachCoin.name}
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
