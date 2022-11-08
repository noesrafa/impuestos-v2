import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ElipseIcon } from '../../theme/Icons'
import { COLOR, FONTS, FSIZE } from '../../theme/appTheme'

const Header = () => {
  return (
    <View style={styles.container}>
        <Image
        style={styles.avatar}
        source={require('../../../assets/images/avatar.png')}
      />
        <View style={styles.period}>
            <Text style={styles.month}>En — </Text>
            <Text style={styles.currentMonth}>Sep</Text>
            <View style={styles.elipse}>
                <ElipseIcon />
            </View>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingTop: 60,
        paddingHorizontal: 30,
        paddingBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    avatar: {
        width: 50,
        height: 50,
    },
    period: {
        flexDirection: 'row',
        alignItems: "center",
    },
    month: {
        fontFamily: FONTS.regular,
        fontSize: FSIZE.md,
        color: COLOR.gray200
    },
    currentMonth: {
        fontFamily: FONTS.regular,
        fontSize: FSIZE.md,
        color: "#fff",
    },
    elipse: {
        position: 'absolute',
        right: -10,
        zIndex: -1,
        bottom: -10
    }
})