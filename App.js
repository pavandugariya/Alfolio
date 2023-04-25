import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Splash from './src/components/splash-screen/Splash';
import OnboardingScreen from './src/components/onboarding-screen/OnboardingScreen';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import FlashMessage, { showMessage } from "react-native-flash-message";
import store from './src/Redux/Store/Store';
import { Provider } from 'react-redux';

const App = () => {
  return (
    // <OnboardingScreen />
    <NavigationContainer>

      <Provider store={store}>
        <FlashMessage
          position={'bottom'}
          duration={2000}
        />
        <StackNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
