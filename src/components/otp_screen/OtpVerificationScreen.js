import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { colors } from '../login/util';
import { globalshedow } from '../../globalUtils/globalutil';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import GradientBtn from '../custom_componets/GradientBtn';
import { postData } from '../../Api/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { base_url } from '../../../env';
import { showMessage } from 'react-native-flash-message';
import { UserTokenHandler } from '../../Redux/Action/AuthAction/AuthAction';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage'
import { useDispatch } from 'react-redux';

const { height, width } = Dimensions.get('screen');
const OtpVerificationScreen = props => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const mobileNumber = props.route.params.pn;
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);

  const [pin1, setpin1] = useState('');
  const [pin2, setpin2] = useState('');
  const [pin3, setpin3] = useState('');
  const [pin4, setpin4] = useState('');
  const [pin5, setpin5] = useState('');
  const [pin6, setpin6] = useState('');
  const otp = pin1 + pin2 + pin3 + pin4 + pin5 + pin6;

  const AuthDispatch = useDispatch();
  const _otpSubmitHandler = async () => {
    const dataObj = {
      mobile: mobileNumber,
      country: 'India',
      verificationCode: otp,
    };

    if (otp.length >= 6) {
      try {
        const res = await postData(`${base_url}/auth/native/login`, dataObj);
        console.log(res.data);
        if (res.status == 200) {
          showMessage({
            message: "Congratulations, your account has been successfully created.",
            type: 'success'
          })
          setUserToken(res.data.accessToken);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      showMessage({
        message: 'Fill Six Digit OTP',
        type: 'default'
      })
    }

  };
  const setUserToken = async (token) => {
    console.log(token);
    try {
      const res = await RNSecureStorage.set("userToken", token, { accessible: ACCESSIBLE.WHEN_UNLOCKED })
      AuthDispatch(UserTokenHandler(token));
    } catch (error) {
      console.log('error', error);
    }
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.bottom_view_style, globalshedow]}>
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.txt_title_style}>{t('otpVerify.title')}</Text>
              <Text
                style={[
                  styles.txt_title_style,
                  { color: '#424242', fontSize: 14, marginVertical: 15 },
                ]}>
                {t('otpVerify.title2')} {mobileNumber}
              </Text>
            </View>
            <View
              style={{
                marginTop: 10,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
              }}>
              <TextInput
                ref={pin1Ref}
                maxLength={1}
                textAlign={'center'}
                keyboardType={'number-pad'}
                onChangeText={e => {
                  e && pin2Ref.current.focus();
                  setpin1(e);
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
                onChangeText={e => {
                  e ? pin3Ref.current.focus() : pin1Ref.current.focus();
                  setpin2(e);
                }}
                style={styles.text_input_style}
              />
              <TextInput
                ref={pin3Ref}
                textAlign={'center'}
                maxLength={1}
                value={pin3}
                keyboardType={'number-pad'}
                onChangeText={e => {
                  e ? pin4Ref.current.focus() : pin2Ref.current.focus();
                  setpin3(e);
                }}
                style={styles.text_input_style}
              />
              <TextInput
                ref={pin4Ref}
                textAlign={'center'}
                maxLength={1}
                keyboardType={'number-pad'}
                value={pin4}
                onChangeText={e => {
                  e ? pin5Ref.current.focus() : pin3Ref.current.focus();
                  setpin4(e);
                }}
                style={styles.text_input_style}
              />
              <TextInput
                ref={pin5Ref}
                maxLength={1}
                textAlign={'center'}
                keyboardType={'number-pad'}
                value={pin5}
                onChangeText={e => {
                  e ? pin6Ref.current.focus() : pin4Ref.current.focus();
                  setpin5(e);
                }}
                style={styles.text_input_style}
              />
              <TextInput
                ref={pin6Ref}
                maxLength={1}
                textAlign={'center'}
                keyboardType={'number-pad'}
                value={pin6}
                onChangeText={e => {
                  e == '' && pin5Ref.current.focus();

                  setpin6(e);
                }}
                style={styles.text_input_style}
              />
            </View>
            <Text style={{ alignSelf: 'center', marginTop: 20, color: '#000' }}>
              {t('otpVerify.title3')}
              <Text onPress={() => { }} style={{ color: colors.txt_color }}>
                {t('otpVerify.resend')}
              </Text>
            </Text>
            <GradientBtn
              loginBtnText={t('otpVerify.btnText')}
              bgColor={'#951516'}
              bgColor2={'#D84B23'}
              color={'#fff'}
              marginTop={20}
              height={40}
              borderRadius={5}
              icon_color={'#fff'}
              icon_size={24}
              onPress={_otpSubmitHandler}
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default OtpVerificationScreen;

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
    alignSelf: 'center',
  },
  txt_title_style: {
    color: colors.txt_color,
    fontSize: 20,
    fontFamily: colors.Regularj,
  },
  text_input_style: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    fontSize: 15,
    width: '12%',
    marginLeft: 8,
    alignItems: 'center',
    color: '#000',
  },
});
