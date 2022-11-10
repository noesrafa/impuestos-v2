import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import {AngleArrowIcon, StarIcon} from '../../theme/Icons';
import PressableScale from '../PressableScale';
import {useNavigation} from '@react-navigation/native';


const Impuestos = () => {
  const navigation = useNavigation();

  return (
    <PressableScale
      flex
      style={styles.container}
      scale={0.8}
      action={() => navigation.replace('SplashScreen')}>
      <Text style={styles.titleText}>Tus impuestos</Text>
      <View style={styles.star}>
        <StarIcon />
      </View>
      <View style={styles.valueContainer}>
        <View style={styles.monthContainer}>
          <Text style={styles.monthText}>Este mes</Text>
          <AngleArrowIcon size={10} />
        </View>
        <Text style={styles.valueText}>$198,822</Text>
      </View>
    </PressableScale>
  );
};

export default Impuestos;

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: COLOR.purple300,
    paddingTop: 28,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
    flex: 1,
    marginRight: 20,
  },
  titleText: {
    fontFamily: FONTS.regular,
    fontSize: FSIZE.normal,
    color: 'white',
  },
  star: {
    position: 'absolute',
    top: 24,
    right: 24,
  },
  valueContainer: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 16,
    backgroundColor: '#fff',
    bottom: 0,
    alignSelf: 'center',
    borderTopRightRadius: 34,
    borderTopLeftRadius: 34,
    width: 220,
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  monthText: {
    fontFamily: FONTS.regular,
    fontSize: FSIZE.sm,
    color: '#000',
  },
  valueText: {
    fontFamily: FONTS.bold,
    fontSize: FSIZE.max,
    color: '#000',
  },
});
