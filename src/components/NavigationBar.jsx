import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GridIcon, NotificationIcon, UserIcon} from '../theme/Icons';
import LinearGradient from 'react-native-linear-gradient';

const NavigationBar = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgba(0, 0, 0,0)','#070607', '#070607']}>
      <View style={styles.wrapper}>
        <UserIcon />
        <GridIcon />
        <NotificationIcon />
      </View>
    </LinearGradient>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    paddingTop: 30,
    paddingBottom: 30,
    paddingHorizontal: 80,
    width: '100%',
  },
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
