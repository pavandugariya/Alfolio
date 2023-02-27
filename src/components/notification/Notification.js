import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import { globalStyle } from '../../globalUtils/globalutil'
import CustomHeader from '../custom_componets/CustomHeader'
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
    const navigation = useNavigation();
    return (
        <ImageBackground source={require('../../Images/profile_bg.png')}
            style={globalStyle.bg_image_style}
        >
            <CustomHeader
                header_name={'Notifications'}
                left_icon={'chevron-back'}
                leftOnpress={() => navigation.goBack()}
            />
        </ImageBackground>
    )
}

export default Notification

const styles = StyleSheet.create({})