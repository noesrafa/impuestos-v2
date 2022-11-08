import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {COLOR} from '../theme/appTheme';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 1750);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'white-content'}
      />
      <View style={styles.lottieContainer}>
        <Lottie
          source={require('../../assets/lottie/splash.json')}
          autoPlay
          loop
        />
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieContainer: {
    width: "70%",
    height: "70%",
  }
});
