import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/login/LoginScreen';
import OnboardingScreen from '../components/onboarding-screen/OnboardingScreen';
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackNavigator