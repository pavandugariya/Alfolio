import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, KeyboardAvoidingView, ScrollView, Alert, } from 'react-native'
import React, { useState, useRef } from 'react'
import { colors } from './util'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomInputField from '../custom_componets/CustomInputField'
import ButtonField from '../custom_componets/ButtonField'
import { globalshedow } from '../../globalUtils/globalutil';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('screen')

const OtpVerificationScreen = (props) => {
    const navigation = useNavigation();
    const mobileNumber = props.route.params.pn
    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)
    const pin5Ref = useRef(null)
    const pin6Ref = useRef(null)

    const [pin1, setpin1] = useState('')
    const [pin2, setpin2] = useState('')
    const [pin3, setpin3] = useState('')
    const [pin4, setpin4] = useState('')
    const [pin5, setpin5] = useState('')
    const [pin6, setpin6] = useState('')

    const verifyOTP = () => {
        navigation.navigate('PickAccount');
    }
    return (
        <ImageBackground
            source={require('../../Images/loginformbg.png')}
            style={styles.container}>
            <View style={styles.logo_top_box}>
                <Image
                    source={require('../../Images/logo_name.png')}
                    style={{
                        height: 60,
                        width: '68%',

                    }}
                />
            </View>
            <View style={[styles.bottom_view_style, globalshedow]}>
                <ScrollView>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={styles.txt_title_style}>OTP Verification</Text>
                        <Text style={[styles.txt_title_style, { color: '#424242', fontSize: 14, marginVertical: 15 }]}>Enter the OTP send To +91 {mobileNumber}</Text>
                    </View>
                    <View style={
                        {
                            marginTop: 10,
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'center'
                        }}>

                        <TextInput
                            ref={pin1Ref}
                            maxLength={1}
                            textAlign={'center'}
                            keyboardType={'number-pad'}
                            onChangeText={(e) => {
                                e && pin2Ref.current.focus()
                                setpin1(e)

                            }}
                            // onSubmitEditing={() => pin2Ref.current.focus()}

                            value={pin1}
                            style={styles.text_input_style}
                        />
                        <TextInput
                            ref={pin2Ref}
                            maxLength={1}
                            textAlign={'center'}
                            keyboardType={'number-pad'}
                            value={pin2}
                            onChangeText={(e) => {
                                e ? pin3Ref.current.focus() : pin1Ref.current.focus()
                                setpin2(e)
                            }
                            }
                            style={styles.text_input_style}
                        />
                        <TextInput
                            ref={pin3Ref}
                            textAlign={'center'}
                            maxLength={1}
                            value={pin3}
                            keyboardType={'number-pad'}
                            onChangeText={(e) => {
                                e ? pin4Ref.current.focus() : pin2Ref.current.focus()
                                setpin3(e)
                            }}
                            style={styles.text_input_style}
                        />
                        <TextInput
                            ref={pin4Ref}

                            textAlign={'center'}
                            maxLength={1}
                            keyboardType={'number-pad'}
                            value={pin4}
                            onChangeText={(e) => {
                                e ? pin5Ref.current.focus() : pin3Ref.current.focus()
                                setpin4(e)
                            }}
                            style={styles.text_input_style}
                        />
                        <TextInput
                            ref={pin5Ref}

                            maxLength={1}
                            textAlign={'center'}
                            keyboardType={'number-pad'}
                            value={pin5}
                            onChangeText={(e) => {
                                e ? pin6Ref.current.focus() : pin4Ref.current.focus()
                                setpin5(e)
                            }}
                            style={styles.text_input_style}
                        />
                        <TextInput
                            ref={pin6Ref}

                            maxLength={1}
                            textAlign={'center'}
                            keyboardType={'number-pad'}
                            value={pin6}
                            onChangeText={(e) => {
                                e == '' && pin5Ref.current.focus()

                                setpin6(e)
                            }}
                            style={styles.text_input_style}
                        />
                    </View>
                    <Text style={{ alignSelf: 'center', marginTop: 20 }}>Didn't receive OTP? <Text onPress={() => { }} style={{ color: colors.txt_color, }}> RESEND</Text></Text>


                    <ButtonField
                        loginBtnText={'VERIFY & CONTINUE'}
                        bgColor={colors.txt_color}
                        color={'#fff'}
                        marginTop={40}
                        height={40}
                        borderRadius={5}
                        onPress={verifyOTP}
                    />

                </ScrollView>

            </View>
        </ImageBackground>

    )
}

export default OtpVerificationScreen

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
        bottom: 0,
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
    },
    text_input_style: {
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        fontSize: 15,
        width: '12%',
        marginLeft: 8,
        alignItems: 'center'
    }
})