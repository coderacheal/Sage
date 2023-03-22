import React from 'react';
import { useSelector } from 'react-redux';

const Options = () => {
  const { currencies } = useSelector((store) => store.crypto);

  return (
    <div className="SelectDiv">
      <select className="select">
        <option value="" disabled selected hidden>Select a Crypto Currency</option>
        {currencies.map((each) => (
          <option key={each.name}>{each.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Options;
