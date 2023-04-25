import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Splash from './src/components/splash-screen/Splash';
import OnboardingScreen from './src/components/onboarding-screen/OnboardingScreen';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import {Provider} from 'react-redux';
import store from './src/Redux/Store/Store';

const App = () => {
  return (
    // <OnboardingScreen />
    <NavigationContainer>
      <Provider store={store}>
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
