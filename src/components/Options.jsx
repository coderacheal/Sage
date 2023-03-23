// import React from 'react';
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getCryptoData } from '../redux/currencySlice';

// const Options = () => {
//   const dispatch = useDispatch();
//   const { currencies } = useSelector((store) => store.crypto);

//   // useEffect(() => {
//   //   dispatch(getCryptoData());
//   // });

//   return (
//     <div className="SelectDiv">
//       <select className="select">
//         <option value="" disabled selected hidden>Select a Crypto Currency</option>
//         {currencies.map((each) => (
//           <option key={each.id}>{each.name}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Options;
