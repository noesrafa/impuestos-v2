import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AngleArrowIcon} from '../../theme/Icons';
import { COLOR, FONTS, FSIZE } from '../../theme/appTheme';

const DetailAnalisis = ({title, percent, value, color}) => {
  return (
      <View style={styles.container}>
        <Text style={[styles.percent, {color: color}]}>{percent}%</Text>
        <Text style={styles.valueText}>${value}</Text>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          <View style={styles.icon}>

          <AngleArrowIcon />
          </View>
        </View>
      </View>
  );
};

export default DetailAnalisis;

const styles = StyleSheet.create({
    container: {

    },
    percent: {
        fontFamily: FONTS.medium,
        fontSize: FSIZE.sm,
        color: "#fff",
        textTransform: 'uppercase',
    },
    valueText: {
        fontFamily: FONTS.bold,
        fontSize: FSIZE.big,
        color: "white",
        marginTop: 6
    }, 
    titleContainer: {
        flexDirection: 'row',
        alignItems: "flex-end"
    },
    titleText: {
        fontFamily: FONTS.regular,
        fontSize: FSIZE.normal,
        color: COLOR.gray200,
        marginRight: 16,
        marginTop: 6
    },
    icon: {
        marginBottom: 6
    }
});
