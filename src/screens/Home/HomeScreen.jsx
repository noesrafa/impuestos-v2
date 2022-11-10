import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useContext} from 'react';
import Header from './Header';
import NavigationBar from '../../components/NavigationBar';
import {COLOR, FONTS, FSIZE} from '../../theme/appTheme';
import {GlobalContext} from '../../../global/Context';
import {AboutIcon, DownloadIcon, ShareIcon} from '../../theme/Icons';
import DetailAnalisis from '../../components/home/DetailAnalisis';
import DeclaracionAcuse from '../../components/home/DeclaracionAcuse';
import Impuestos from '../../components/home/Impuestos';

const HomeScreen = () => {
  const {val, setVal} = useContext(GlobalContext);
  console.log(val);

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.analisis}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Ingresos acumulados</Text>
            <AboutIcon />
          </View>
          <View style={styles.revenueContainer}>
            <Text style={styles.revenueNumber}>$199,154</Text>
            <Text style={[styles.revenueNumber, {color: COLOR.gray300}]}>
              .00
            </Text>
          </View>
          {/* Contenedor de los detalles */}
          <View style={styles.detailAnalisisContainer}>
            <DetailAnalisis
              percent={77}
              value={'198,822'}
              title={'Gastos\nacumulados'}
              color={COLOR.red}
            />
            <View style={styles.separator} />
            <DetailAnalisis
              percent={23}
              value={'198,822'}
              title={'Utilidad'}
              color={COLOR.green300}
            />
          </View>
          {/* Contenedor de modulos */}
        </View>
          <ScrollView
            style={styles.modulosContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <DeclaracionAcuse />
            <View style={styles.modulosRight}>
              <Impuestos />
              <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                  <DownloadIcon />
                </View>
                <View style={styles.button}>
                  <ShareIcon />
                </View>
              </View>
            </View>
          </ScrollView>
      </ScrollView>
      <NavigationBar />
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {},
  analisis: {
    paddingHorizontal: 20,
    marginTop: 150,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: FONTS.medium,
    fontSize: FSIZE.md,
    color: COLOR.gray200,
    marginRight: 10,
  },
  revenueContainer: {
    flexDirection: 'row',
  },
  revenueNumber: {
    fontFamily: FONTS.medium,
    fontSize: FSIZE.title,
    color: 'white',
    marginTop: 6,
  },
  detailAnalisisContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  separator: {
    height: 100,
    width: 3,
    backgroundColor: '#0D0C0D',
    marginHorizontal: 30,
  },
  modulosContainer: {
    marginTop: 30,
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: COLOR.gray400,
    padding: 45,
    borderRadius: 100,
    marginTop: 14,
    marginRight: 14,
  },
});
