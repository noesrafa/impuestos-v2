import React from 'react';


const GlobalContext = React.createContext();

const ContextProvider = ({children}) => {
  const [val, setVal] = React.useState({
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
  });

  return (
    <GlobalContext.Provider
      value={{val, setVal}}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, ContextProvider};
