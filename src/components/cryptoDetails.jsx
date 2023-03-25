import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, NavLink} from 'react-router-dom';
// import Navbar from './NavBar';
// import { getCryptoData } from '../redux/currencySlice';
import { getCurrencyDetails } from '../redux/currencySlice';

const CryptoDetails = () => {
  const { CryptoId } = useParams();
  const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCurrencyDetails(CryptoId));
  }, [dispatch, CryptoId, crypto]);

  const clickedCoin = crypto.filter((coin) => coin.id === CryptoId);

  return (
    <div>
      <NavLink to="/"><i className="fa-solid fa-arrow-right" /></NavLink>
      {clickedCoin.map((coin) => (
        <div className="oneCurrency" key={coin.id}>
          <img key={coin.id} src={coin.image.small} alt="coin" />
          <p key={coin.name}>{coin.name}</p>
          <div className="AllDetails">
            <div className="moreDetails">
              <p>Current Price(USD):</p>
              <p className="span" key={coin.name}>${coin.market.current_price.usd}</p>
            </div>
            <div className="moreDetails">
              <p>Rank:</p>
              <p key={coin.name} className="span">{coin.market.market_cap_rank}</p>
            </div>
            <div className="moreDetails">
              <p>Market Cap(USD):</p>
              <p key={coin.name} className="span">${coin.market.market_cap.usd.toLocaleString()}</p>
            </div>
            <div className="moreDetails">
              <p>Last updated time:</p>
              <p key={coin.name} className="span">{coin.time}</p>
            </div>
            <div className="moreDetails">
              <p>Price Change in 24hrs:</p>
              <p key={coin.name} className="span">${coin.market.price_change_24h}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoDetails;
