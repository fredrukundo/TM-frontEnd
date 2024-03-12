// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

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

  return (
    <DataContext.Provider value={{ userData, updateUserData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};