// // DataContext.js
// import React, { createContext, useContext, useState } from 'react';

// const DataContext = createContext();

// export const DataProvider = ({ children }) => {
//   const [userData, setUserData] = useState({
//     kilosToSell: 1,
//     pricePerKg: 5,
//     from: {
//       city: null,
//       flagPhoto: null,
//       country: null,
//     },
//     to: {
//       city: null,
//       flagPhoto: null,
//       country: null,
//     },
//     depDate: {
//       day: null,
//       month: null,
//       year: null,
//     },
//     arrDate: {
//       day: null,
//       month: null,
//       year: null,
//     },
//   });

//   const updateUserData = (data) => {
//     setUserData((prevData) => ({ ...prevData, ...data }));
//   };

//   return (
//     <DataContext.Provider value={{ userData, updateUserData }}>
//       {children}
//     </DataContext.Provider>
//   );
// };

// export const useDataContext = () => {
//   return useContext(DataContext);
// };


import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();
const InputContext = createContext();

export const useDataContext = () => useContext(DataContext);
export const useInputContext = () => useContext(InputContext);

export const DataProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    kilosToSell: 1,
    pricePerKg: 5,
    from: {
      city: null,
      flagPhoto: null,
      country: null,
    },
    to: {
      city: null,
      flagPhoto: null,
      country: null,
    },
    depDate: {
      day: null,
      month: null,
      year: null,
    },
    arrDate: {
      day: null,
      month: null,
      year: null,
    },
  });

  const updateUserData = (data) => {
    setUserData((prevData) => ({ ...prevData, ...data }));
  };

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
 
  return (
    <DataContext.Provider value={{ userData, updateUserData }}>
      <InputContext.Provider value={{ from, setFrom, to, setTo }}>
        {children}
      </InputContext.Provider>
    </DataContext.Provider>
  );
};
