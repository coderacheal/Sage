import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams, NavLink } from 'react-router-dom';
import { getCryptoData } from '../redux/currencySlice';
import Navbar from './NavBar';

const Tiles = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const { name } = useParams();
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
            <NavLink to={`/crypto/${name}`}>
              <i className="fa-solid fa-arrow-right" />
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tiles;
