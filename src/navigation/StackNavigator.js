import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/login/LoginScreen';
import OnboardingScreen from '../components/onboarding-screen/OnboardingScreen';
import Home from '../components/home/Home';
import DrawerNavigator from './DrawerNavigator';
import OtpVerificationScreen from '../components/login/OtpVerificationScreen';
import PickAccount from '../components/login/PickAccount';
import ShowMarksheet from '../components/show_marksheet/ShowMarksheet';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="OTP" component={OtpVerificationScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
            <Stack.Screen name="PickAccount" component={PickAccount} options={{ headerShown: false }} />
            <Stack.Screen name="ShowMarksheet" component={ShowMarksheet} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigator