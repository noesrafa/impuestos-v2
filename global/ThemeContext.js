import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';

const themes = colorScheme => 
  colorScheme == 'dark'
    ? {
        mode: "dark",
        background: '#070607',
        purple300: '#573AF1',
        purple200: '#9F8FF8',
        gray200: '#8E8B8E',
        gray300: '#403E44',
        gray400: '#272627',
        green300: '#21C688',
        green200: '#99E5C9',
        red: '#EF3A3E',
        text: "white",
        secondaryText: "8E8B8E",
        whitePurple: "#FFFFFF",
        purpleOpacity: "#573AF1"
      }
    : {
        mode: "light",
        background: 'white',
        purple300: '#573AF1',
        purple200: '#9F8FF8',
        gray200: '#AFBBC6',
        gray300: '#AFBBC6',
        gray400: '#272627',
        green300: '#21C688',
        green200: '#99E5C9',
        red: '#EF3A3E',
        text: "black",
        secondaryText: "black",
        whitePurple: "#573AF1",
        purpleOpacity: "#F1F3FF"
      };
;

const GlobalContext = React.createContext({});

const ContextProvider = ({children}) => {
  const [theme, setTheme] = React.useState(themes())
  const colorScheme = useColorScheme()

  useEffect(() => {
    setTheme(themes(colorScheme))
  }, [colorScheme])

  return (
    <GlobalContext.Provider
      value={theme}>
      {children}
    </GlobalContext.Provider>
  );
};

export {GlobalContext, ContextProvider};
