// MyContextProvider.js
import React, { useState } from 'react';
import Mycontext from './Mycontext';

const MyContextProvider = ({ children }) => {
  const [city, setCity] = useState("mumbai");

  // Functions to update the state
  const updateState = () => {
    
  };

  return (
    <Mycontext.Provider value={{ city, setCity }}>
      {children}
    </Mycontext.Provider>
  );
};

export default MyContextProvider;
