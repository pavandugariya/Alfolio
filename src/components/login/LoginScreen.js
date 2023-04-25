import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Keyboard, TextInput,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from './util';
import ButtonField from '../custom_componets/ButtonField';
import { globalshedow } from '../../globalUtils/globalutil';
import { useNavigation } from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import GradientBtn from '../custom_componets/GradientBtn';

const { height, width } = Dimensions.get('screen');
import { useTranslation } from 'react-i18next';
import { base_url } from '../../../env';
import { postData } from '../../Api/Api';
import { showMessage } from 'react-native-flash-message';

const LoginScreen = () => {
  const { t, i18n, ready } = useTranslation();
  const navigation = useNavigation();
  const [phoneNumber, setphoneNumber] = useState('');


  const LoginHander = async () => {
    const dataObj = {
      "mobile": phoneNumber,
      "type": "authenticate-user"
    }
    console.log(dataObj);
    try {
      if (phoneNumber.length >= 10) {
        const res = await postData(`${base_url}/auth/send-code`, dataObj);
        if (res.status == 201) {
          showMessage({
            message: `OTP Send Your Mobile No ${phoneNumber}`,
            type: 'success'
          })
          navigation.navigate('OTP', { pn: phoneNumber });
        } else if (res.message === 'Request failed with status code 500') {
          showMessage({
            message: 'please wait two minute ',
            type: 'default'
          })
        };
      }
      else {
        showMessage({
          message: 'Please Enter Correct Mobile Number',
          type: 'info'
        });
      }
    } catch (error) {
      console.log('error', error);
      showMessage({
        message: error.message,
        type: 'default'
      })
    }

  };

  // useEffect(() => {
  //     keyChainCode()
  //     Keychain.getSupportedBiometryType()
  //         .then(biometryType => {
  //             if (!!biometryType) console.log(biometryType);
  //             else console.log(biometryType);
  //         })
  // }, [])

  const otpVerification = () => {
    // getFinger();
    navigation.navigate('OTP', { pn: phoneNumber });
    // if (phoneNumber.length >= 10) {
    // } else {
    //   Alert.alert(t('login.alertTitle1'), t('login.alertTitle2'), [
    //     // {
    //     //     text: 'Cancel',
    //     //     onPress: () => console.log('Cancel Pressed'),
    //     //     style: 'cancel',
    //     // },
    //     {
    //       text: t('login.alertTitle3'),
    //       onPress: () => console.log('OK Pressed'),
    //     },
    //   ]);
    // }
  };
  const keyChainCode = async () => {
    const username = 'deepak';
    const password = 'solanki';

    Keychain.setGenericPassword(username, password, {
      accessControl: 'BiometryCurrentSetOrDevicePasscode',
      accessible: 'WhenPasscodeSetThisDeviceOnly',
      authenticationType: 'DevicePasscodeOrBiometrics',
    }).then(result => {
      console.log(result);
    });

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
        console.log(result);
      })
      .catch(async error => {
        if ((await Keychain.getSupportedBiometryType()) === null) {
          // After 5 failed attempts
          // biometrics authentication is disabled system-wide.
          // Keychain.getsupportedBioemtryType() will return null
        }
        if (
          error.message ===
          'The user name or passphrase you entered is not correct.'
        ) {
          // Invalid biometrics credentials after 3 attempts
        }
        if (error.message === 'User canceled the operation.') {
          // Authentication was cancelled
        }
      });
  };

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
              <Text style={[styles.txt_title_style, { fontWeight: '700' }]}>
                {t('login.title')}
              </Text>
              <Text
                style={[
                  styles.txt_title_style,
                  { color: '#424242', fontSize: 14, marginVertical: 15 },
                ]}>
                {t('login.title2')}
              </Text>
            </View>
            <View style={{ marginTop: 10 }}>
              <TextInput
                placeholder="9754930302"
                placeholderTextColor={'#8a8282'}
                value={phoneNumber}
                onChangeText={e => {
                  setphoneNumber(e);
                }}
                maxLength={10}
                keyboardType={'number-pad'}
                style={{
                  borderWidth: 1,
                  borderRadius: 5,
                  height: 40,
                  paddingLeft: 50,
                  fontSize: 15,
                  color: '#000',
                }}
              />
              <Text
                style={{
                  position: 'absolute',
                  top: -6,
                  left: 10,
                  fontSize: 8,
                  backgroundColor: '#fff',
                  paddingHorizontal: 2,
                  fontFamily: colors.Regularm,
                  color: '#3d3c3c',
                }}>
                {t('login.mobile')}
              </Text>
              <Text
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 10,
                  fontSize: 15,
                  color: '#514f4f',
                }}>
                +91 |
              </Text>
            </View>
            <Text style={styles.or_text_style}>OR</Text>
            {/* <ButtonField
              loginBtnText={t('login.btnText2')}
              bgColor={colors}
              color={'#fff'}
              // marginTop={40}
              // height={40}
              borderRadius={5}
              // onPress={otpVerification}
            /> */}
            <ButtonField
              color={'#951516'}
              bgColor={'#fff'}
              elevation={5}
              loginBtnText={t('login.btnText2')}
              style={styles.btn_parent_style}
              googleImage
              onPress={() => {
                navigation.navigate('OTP', { pn: phoneNumber });
              }}
            />

            <GradientBtn
              loginBtnText={t('login.btnText')}
              bgColor={'#951516'}
              bgColor2={'#951516'}
              color={'#fff'}
              marginTop={20}
              height={40}
              borderRadius={5}
              icon_color={'#fff'}
              icon_size={24}
              // icon_name={'share-social'}
              onPress={() => LoginHander()}
            />
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};

export default LoginScreen;

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
    // width: width * 0.95,
    width: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    top: 70,
    alignSelf: 'center',
  },
  txt_title_style: {
    color: '#951516',
    fontSize: 20,
    fontFamily: colors.Regularj,
  },
  or_text_style: {
    marginVertical: 20,
    alignSelf: 'center',
    color: '#951516',
    fontWeight: '600',
  },
  btn_parent_style: {
    width: '60%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 40,
    elevation: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btn_text_style: {
    color: '#951516',
    fontWeight: '500',
  },
});
