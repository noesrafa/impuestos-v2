import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import HomeScreen from '../screens/Home/HomeScreen';
//Screens
import SplashScreen from '../screens/SplashScreen';



const Stack = createStackNavigator();

function StackNavigator() {

  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator