import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import NavigationBar from '../../NavigationBar'

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Text>HomeScreen</Text>
      <NavigationBar />
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})