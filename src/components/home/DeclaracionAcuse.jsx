import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import {DotMenuIcon, DownArrowIcon, GraphGradient} from '../../theme/Icons';

const DeclaracionAcuse = () => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <View style={styles.percentContainer}>
          <DownArrowIcon />
          <Text style={styles.percentText}>2.4%</Text>
        </View>
        <DotMenuIcon />
      </View>
      <Image
        style={styles.graph}
        source={require('../../../assets/images/graphGradient.png')}
      />
      <View style={styles.itemsContainer}>
        <Text style={styles.titleText}>Declaración</Text>
        <Text style={styles.descriptionText}>Septiembre 2022</Text>
        <View style={styles.valueContainer}>
            <Text style={styles.valueText}>$2,353</Text>
            <Text style={[styles.valueText, {color: COLOR.gray200}]}>/MXN</Text>
        </View>
      </View>
    </View>
    </>
  );
};

export default DeclaracionAcuse;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.gray400,
    borderRadius: 44,
    width: FSIZE.screenWidth * 0.55,
    marginRight: 14
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 30, 
    paddingBottom: 10,
  },
  percentContainer: {
    flexDirection: 'row',
    alignItems: "center",
  },
  percentText: {
    marginLeft: 8,
    fontFamily: FONTS.medium,
    fontSize: FSIZE.sm,
    color: "white"
  },
  graph: {
    width: "100%",
    resizeMode: "contain",
    height: 120,
  },
  itemsContainer: {
    padding: 18
  },
  titleText: {
    fontFamily: FONTS.medium,
    fontSize: FSIZE.normal,
    color: "white"
  },
  descriptionText: {
    fontFamily: FONTS.regular,
    fontSize: FSIZE.sm,
    color: COLOR.gray200,
    marginTop: 6
  },
  valueContainer: {
    flexDirection: 'row',
    backgroundColor: COLOR.background,
    borderRadius: 100,
    paddingVertical: 13,
    justifyContent: "center",
    marginTop: 16
  },
  valueText: {
    fontFamily: FONTS.medium,
    fontSize: FSIZE.sm,
    color: "white",
  }
});
