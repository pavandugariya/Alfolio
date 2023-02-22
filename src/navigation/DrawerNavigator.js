import { View, Text } from 'react-native'
import React from 'react'
import Home from '../components/home/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDraweContent from '../components/custom_componets/CustomDraweContent';
import Profile from '../components/profile/Profile';
import Notification from '../components/notification/Notification';
import Setting from '../components/setting/Setting';

const Drawer = createDrawerNavigator();


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={() =>
            <CustomDraweContent
                iconColor={'#951516'}
                iconSize={24}
            />}>
            <Drawer.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Drawer.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Drawer.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
            <Drawer.Screen name="Settings" component={Setting} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator