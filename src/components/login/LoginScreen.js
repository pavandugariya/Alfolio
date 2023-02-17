import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, KeyboardAvoidingView, ScrollView, } from 'react-native'
import React from 'react'
import { colors } from './util'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import CustomInputField from '../custom_componets/CustomInputField'
import ButtonField from '../custom_componets/ButtonField'
const { height, width } = Dimensions.get('screen')

const LoginScreen = () => {
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
            <View style={styles.bottom_view_style}>
                <KeyboardAvoidingView>
                    <ScrollView>
                        <View style={{ alignItems: 'center', marginVertical: 20 }}>
                            <Text style={styles.txt_title_style}>Please sign in</Text>
                        </View>
                        <CustomInputField
                            colors={'#000'}
                            placeholderText={'Enter your user name'}
                            leftIcon={'person-outline'}
                            // rightIcon={'email'}
                            textname={'User Name'}
                        />
                        <CustomInputField
                            colors={'#000'}
                            placeholderText={'Enter your password'}
                            leftIcon={'lock-closed-outline'}
                            textname={'Password'}
                            rightIcon={'eye-off-outline'}
                            isVisible={false}
                            secondRightIcon={'eye-outline'}
                        />
                        <TouchableOpacity>
                            <Text>Forgot password?</Text>
                        </TouchableOpacity>
                        <ButtonField
                            loginBtnText={'Sign In'}
                            bgColor={colors.txt_color}
                            color={'#fff'}
                            marginVertical={20}
                            height={50}
                        />
                        <TouchableOpacity
                            style={{ alignItems: 'flex-end' }}    >
                            <Text>Sign Up</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </KeyboardAvoidingView>

            </View>
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
        width: width,
        height: height * 0.52,
        backgroundColor: '#fff',
        position: 'absolute',
        bottom: 0,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 20,
    },
    txt_title_style: {
        color: colors.txt_color,
        fontSize: 20,
        fontFamily: colors.Regularj
    }
})