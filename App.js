import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Splash from './src/components/splash-screen/Splash';
import OnboardingScreen from './src/components/onboarding-screen/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    // <OnboardingScreen />
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer >

  )
}

export default App

const styles = StyleSheet.create({})