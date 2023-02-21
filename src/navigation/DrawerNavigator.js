import { View, Text } from 'react-native'
import React from 'react'
import Home from '../components/home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Feed" component={Home} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator