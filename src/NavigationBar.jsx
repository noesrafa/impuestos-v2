import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GridIcon, NotificationIcon, UserIcon} from './theme/Icons';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <UserIcon />
        <GridIcon />
        <NotificationIcon />
      </View>
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      paddingTop: 30,
      paddingBottom: 40,
      paddingHorizontal: 40,
      width: '100%',
    },
    wrapper: {
        width: "55%",
        flexDirection: 'row',
        justifyContent: 'space-between',
  }
});
