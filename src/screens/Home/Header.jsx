import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useContext } from 'react';
import {ElipseIcon} from '../../theme/Icons';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
    
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../../assets/images/avatar.png')}
      />
      <View style={styles.period}>
        <Text style={styles.month}>Ene — </Text>
        <Text style={styles.currentMonth}>Sep</Text>
        <View style={styles.elipse}>
          <ElipseIcon />
        </View>
      </View>
    <LinearGradient
      style={styles.gradient}
      colors={['#070607', '#070607','#070607', 'rgba(0, 0, 0,0)']}>
    </LinearGradient>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: FSIZE.screenWidth,
    zIndex: 2,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  period: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  month: {
    fontFamily: FONTS.regular,
    fontSize: FSIZE.md,
    color: COLOR.gray200,
  },
  currentMonth: {
    fontFamily: FONTS.regular,
    fontSize: FSIZE.md,
    color: '#fff',
  },
  elipse: {
    position: 'absolute',
    right: -10,
    zIndex: -1,
    bottom: -10,
  },
  gradient: {
    position: 'absolute',
    width: FSIZE.screenWidth,
    height: 200,
    zIndex: -2,
  }
});
