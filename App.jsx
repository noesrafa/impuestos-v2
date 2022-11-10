import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigator from './src/navigator/StackNavigator';
import {COLOR} from './src/theme/appTheme';
import { ContextProvider } from './global/Context';

const App = () => {
  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: COLOR.background,
    },
  };

  return (
    <ContextProvider>
      <NavigationContainer theme={navTheme}>
        <View style={styles.container}>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'white-content'}
          />
          <StackNavigator />
        </View>
      </NavigationContainer>
    </ContextProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
