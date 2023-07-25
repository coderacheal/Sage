import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getCurrencyDetails } from '../redux/currencySlice';
import Navbar from './NavBar';

const CryptoDetails = () => {
  const { CryptoId } = useParams();
  const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCurrencyDetails(CryptoId));
  }, [dispatch, CryptoId, crypto]);

  const clickedCoin = crypto.filter((coin) => coin.id === 'bitcoin');

  return (
    <div>
      <Navbar />
      {clickedCoin.map((coin) => (

        <div className="oneCurrency" key={coin.id}>
          <Link to={`/crypto/visualise/${coin.id}`}>Chart</Link>
          <div className="CoinStats">
            <img key={coin.id} src={coin.image.small} alt="coin" className="image" />
            <p key={coin.id}>
              Name:
              {coin.name}
            </p>
            <p key={coin.id}>
              Symbol:
              {coin.symbol}
            </p>
          </div>

          <div className="AllDetails">
            <div className="moreDetails">
              <p>Current Price(USD):</p>
              <p className="span" key={coin.id}>
                $
                {coin.market.current_price.usd.toLocaleString()}
              </p>
            </div>
            <div className="moreDetails">
              <p>Rank:</p>
              <p key={coin.id} className="span">{coin.market.market_cap_rank}</p>
            </div>
            <div className="moreDetails">
              <p>Market Cap(USD):</p>
              <p key={coin.id} className="span">
                $
                {coin.market.market_cap.usd.toLocaleString()}
              </p>
            </div>
            <div className="moreDetails">
              <p>Last updated time:</p>
              <p key={coin.id} className="span">{coin.time}</p>
            </div>
            <div className="moreDetails">
              <p>Price Change in 24hrs:</p>
              <p key={coin.id} className="span">
                $
                {coin.market.price_change_24h.toFixed(4)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CryptoDetails;
