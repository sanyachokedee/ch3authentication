import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './../screens/Home'
import SplashScreen from './../screens/SplashScreen'
import SignInScreen from './../screens/SignInScreen'
import SignUpScreen from './../screens/SignUpScreen'


const Stack = createStackNavigator()

const RootStack = () => {
  return (
    // <Stack.Navigator initialRouteName='AnimateAPI'>
    <Stack.Navigator 
      screenOptions = {{ headerShow: false }}
      initialRouteName="SplashScreen">
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignInScreen" component={SignInScreen} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default RootStack