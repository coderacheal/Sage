import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar from './NavBar';
// import { getCryptoData } from '../redux/currencySlice';
import { getCurrencyDetails } from '../redux/currencySlice';

const CryptoDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { crypto } = useSelector((store) => store.crypto);

  useEffect(() => {
    dispatch(getCurrencyDetails());
  }, [dispatch]);

  // const clickedCoin = crypto.find((coin) => coin.name === id);
  // console.log(clickedCoin);

  return (
    <div>
      <Navbar />
      <div className="oneCurrency">
        <div className="dailyData">
          <div>
            <img src={crypto.image.thumb} key={crypto.name} alt="thumbnail" />
            {crypto.map((each) => (
              <p key={each.name}>{cryptoCoin.name}</p>
            ))}
          </div>
          {/* {crypto.map((each) => ( */}
          <p key={cryptoCoin.name}>{cryptoCoin.symbol}</p>
          {/* ))} */}
        </div>
        <div className="AllDetails">
          <div className="moreDetails">
            <p>Current Price(USD):</p>
            {/* {crypto.map((each) => ( */}
            <p className="span" key={cryptoCoin.name}>${cryptoCoin.market.current_price.usd}</p>
            {/* // ))} */}
          </div>
          <div className="moreDetails">
            <p>Rank:</p>
            {/* {crypto.map((each) => ( */}
            <p key={cryptoCoin.name} className="span">{cryptoCoin.market.market_cap_rank}</p>
            {/* ))} */}
          </div>
          <div className="moreDetails">
            <p>Market Cap(USD):</p>
            {/* {crypto.map((each) => ( */}
            <p key={cryptoCoin.name} className="span">{cryptoCoin.market.market_cap.usd}</p>
            {/* ))} */}
          </div>
          <div className="moreDetails">
            <p>Last updated time:</p>
            {/* {crypto.map((each) => ( */}
            <p key={cryptoCoin.name} className="span">{cryptoCoin.last_updated}</p>
            {/* ))} */}
          </div>
          <div className="moreDetails">
            <p>Percentage Change in 24hrs:</p>
            {/* {crypto.map((each) => ( */}
            <p key={cryptoCoin.name} className="span">{cryptoCoin.market.price_change_24h}</p>
            {/* ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoDetails;
