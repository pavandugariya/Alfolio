import { StyleSheet, Text, View, Image, ImageBackground, TouchableWithoutFeedback, Dimensions, KeyboardAvoidingView, ScrollView, Alert, Platform, Keyboard } from 'react-native'
import React, { useState, useEffect } from 'react'
import { colors } from './util'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomInputField from '../custom_componets/CustomInputField'
import ButtonField from '../custom_componets/ButtonField'
import { globalshedow } from '../../globalUtils/globalutil';
import { useNavigation } from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';

const { height, width } = Dimensions.get('screen')

const LoginScreen = () => {
    const navigation = useNavigation();
    const [phoneNumber, setphoneNumber] = useState('');

    useEffect(() => {
        keyChainCode()
        Keychain.getSupportedBiometryType()
            .then(biometryType => {
                if (!!biometryType) console.log(biometryType);
                else console.log(biometryType);
            })
    }, [])



    const otpVerification = () => {
        getFinger();
        // if (phoneNumber.length >= 10) {
        //     navigation.navigate('OTP', { pn: phoneNumber })
        // } else {
        //     Alert.alert('Mobile number ', 'please enter correct mobile number', [
        //         // {
        //         //     text: 'Cancel',
        //         //     onPress: () => console.log('Cancel Pressed'),
        //         //     style: 'cancel',
        //         // },
        //         { text: 'OK', onPress: () => console.log('OK Pressed') },
        //     ]);

        // }
    }
    const keyChainCode = async () => {
        const username = 'deepak';
        const password = 'solanki';


        Keychain.setGenericPassword(username, password, {
            accessControl: 'BiometryCurrentSetOrDevicePasscode',
            accessible: 'WhenPasscodeSetThisDeviceOnly',
            authenticationType: 'DevicePasscodeOrBiometrics'
        })
            .then(result => {
                console.log(result)
            })


        // Store the credentials

        // try {
        //     // Retrieve the credentials
        //     // const res = await Keychain.setGenericPassword(username, password, {
        //     //     service: 'bio',
        //     //     accessControl: 'BiometryAny',
        //     //     accessible: 'AccessibleWhenPasscodeSetThisDeviceOnly'

        //     // });
        //     // console.log(res);
        //     const credentials = await Keychain.getGenericPassword();
        //     const log = await Keychain.getSupportedBiometryType('Fingerprint');
        //     console.log(log);
        //     if (credentials) {
        //         console.log(
        //             'Credentials successfully loaded for user ' + credentials.username + '... pass...>' + credentials.password
        //         );
        //     } else {
        //         console.log('No credentials stored');
        //     }
        // } catch (error) {
        //     console.log("Keychain couldn't be accessed!", error);
        // }
        // // await Keychain.resetGenericPassword();
    };
    const getFinger = async () => {
        const re = await Keychain.getGenericPassword()
            .then(result => {
                console.log(result)
            }).catch(async (error) => {
                if ((await Keychain.getSupportedBiometryType()) === null) {
                    // After 5 failed attempts
                    // biometrics authentication is disabled system-wide.
                    // Keychain.getsupportedBioemtryType() will return null
                }
                if (error.message === 'The user name or passphrase you entered is not correct.') {
                    // Invalid biometrics credentials after 3 attempts
                }
                if (error.message === 'User canceled the operation.') {
                    // Authentication was cancelled
                }
            })
    }
    return (
        <ImageBackground
            source={require('../../Images/loginformbg.png')}
            style={styles.container}>
            {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}

            <View style={styles.logo_top_box}>
                <Image
                    source={require('../../Images/logo_name.png')}
                    style={{
                        height: 60,
                        width: '68%',

                    }}
                />
            </View>
            <View
                style={[styles.bottom_view_style, globalshedow]}>
                <ScrollView>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={styles.txt_title_style}>Enter Your Phone Number</Text>
                        <Text style={[styles.txt_title_style, { color: '#424242', fontSize: 14, marginVertical: 15 }]}>We will send you the <Text style={{ fontWeight: 'bold' }}>6 digit</Text> verification code</Text>
                    </View>
                    <View style={{ marginTop: 10 }}>

                        <TextInput
                            placeholder='9754930302'
                            placeholderTextColor={'#8a8282'}
                            value={phoneNumber}
                            onChangeText={(e) => {
                                setphoneNumber(e)
                            }}
                            maxLength={10}
                            keyboardType={'number-pad'}
                            style={{
                                borderWidth: 1,
                                borderRadius: 5,
                                height: 40,
                                paddingLeft: 50,
                                fontSize: 15,
                            }}

                        />
                        <Text style={{ position: 'absolute', top: -6, left: 10, fontSize: 8, backgroundColor: '#fff', paddingHorizontal: 2, fontFamily: colors.Regularm, color: '#3d3c3c' }}>Mobile</Text>
                        <Text style={{ position: 'absolute', top: 8, left: 10, fontSize: 15, color: '#514f4f' }}>+91 |</Text>
                    </View>

                    <ButtonField
                        loginBtnText={'GENERATE OTP'}
                        bgColor={colors.txt_color}
                        color={'#fff'}
                        marginTop={40}
                        height={40}
                        borderRadius={5}
                        onPress={otpVerification}
                    />
                </ScrollView>
            </View>
            {/* </TouchableWithoutFeedback> */}
        </ImageBackground>

    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',

    },
    logo_top_box: {
        width: width,
        height: height * 0.23,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottom_view_style: {
        width: width * 0.95,
        backgroundColor: '#fff',
        position: 'relative',
        // bottom: 0,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        borderRadius: 20,
        paddingHorizontal: 30,
        paddingVertical: 40,
        top: 100,
        alignSelf: 'center'

    },
    txt_title_style: {
        color: colors.txt_color,
        fontSize: 20,
        fontFamily: colors.Regularj
    }
})