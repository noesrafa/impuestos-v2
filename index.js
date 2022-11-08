/**
 * @format
 */
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const ImpuestosApp = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <App />
    )
};

AppRegistry.registerComponent(appName, () => ImpuestosApp);
