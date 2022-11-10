import React from 'react';


const GlobalContext = React.createContext({});

const ContextProvider = ({children}) => {

  return (
    <GlobalContext.Provider
      value={{}}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, ContextProvider};
