import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  Dimensions,
  ScrollView,
  Keyboard,
  TextInput,
  Linking,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { colors } from './util';
import ButtonField from '../custom_componets/ButtonField';
import { globalshedow, globalStyle } from '../../globalUtils/globalutil';
import { useNavigation } from '@react-navigation/native';
import * as Keychain from 'react-native-keychain';
import GradientBtn from '../custom_componets/GradientBtn';

const { height, width } = Dimensions.get('screen');
import { useTranslation } from 'react-i18next';
import { base_url } from '../../../env';
import { postData } from '../../Api/Api';
import { showMessage } from 'react-native-flash-message';
import { Customcolor } from '../../Utility/Customcolor';
import { horizScale, vertScale } from '../../Utility/Layout';
import { fontSize } from '../../Utility/Fontsize';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';
import { useDispatch } from 'react-redux';
import { UserTokenHandler } from '../../Redux/Action/AuthAction/AuthAction';

const LoginScreen = () => {
  const { t, i18n, ready } = useTranslation();
  const navigation = useNavigation();
  const [phoneNumber, setphoneNumber] = useState('');
  const [UserWTToken, setUserWTToken] = useState();
  const [isLoading, setisLoading] = useState(false);

  const AuthDispatch = useDispatch();

  const LoginHander = async () => {
    const dataObj = {
      mobile: '+91' + phoneNumber,
      type: 'authenticate-user',
    };
    try {
      if (phoneNumber.length >= 10) {
        setisLoading(true);
        const res = await postData(`${base_url}/auth/send-code`, dataObj);
        if (res.status == 201) {
          showMessage({
            message: `OTP Send Your Mobile No ${phoneNumber}`,
            type: 'success',
          });
          setisLoading(false);
          navigation.navigate('OTP', { pn: phoneNumber });
        } else if (res.message === 'Request failed with status code 500') {
          showMessage({
            message: 'please wait two minute ',
            type: 'default',
          });
        }
      } else {
        showMessage({
          message: 'Please Enter Correct Mobile Number',
          type: 'info',
        });
      }
      setisLoading(false);

    } catch (error) {
      setisLoading(false);

      console.log('error', error);

      showMessage({
        message: error.message,
        type: 'default',
      });
    }
  };

  // google auth handler

  useEffect(() => {
    Linking.getInitialURL().then(res => console.log(res, 'linking'));
  }, []);

  const handleOpenURL = ({ url }) => {
    console.log(url, 'redirect');

    if (url.indexOf('?accessToken') !== -1) {
      if (url) {
        console.log(url);
        setUserWTToken(url.substring(34));
        setUserTokenGoogle(url.substring(34));
        setisLoading(false);
      }
    }
  };

  const setUserTokenGoogle = async id => {
    // console.log(id)
    const token = id;
    console.log(token);
    try {
      const res = await RNSecureStorage.set('userToken', token, {
        accessible: ACCESSIBLE.WHEN_UNLOCKED,
      });
      AuthDispatch(UserTokenHandler(token));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Your code here
    Linking.addEventListener('url', handleOpenURL);
  }, []);
  const GoogleLoginHandler = async () => {
    try {
      const res = await Linking.openURL(`${base_url}/auth/google`);
      console.log('response...', res);
      setisLoading(false);
    } catch (error) {
      console.error(error);
      setisLoading(false);
    }
  };
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
    <KeyboardAvoidingView style={styles.container} behavior='padding'>

      <ImageBackground
        source={require('../../Images/loginformbg.png')}
        style={[StyleSheet.absoluteFillObject, {
          position: 'absolute',
          left: 0,
          top: 0,
          // width: Dimensions.get('window').width,
          // height: Dimensions.get('window').height,
        }]}>
        {isLoading && (
          <ActivityIndicator size={40} color={'#951516'} style={globalStyle.indicator_style} />
        )}
        {/* <ScrollView > */}
        <View style={styles.logo_top_box}>
          <Image
            style={styles.logo_top_image}
            source={require('../../Images/logo_name.png')}
          />
        </View>
        <View style={[styles.bottom_view_style]}        >
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
              style={styles.inputText_phone}
            />
            <Text style={styles.mobile_text_style}>{t('login.mobile')}</Text>
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

          <ButtonField
            color={'#951516'}
            bgColor={'#fff'}
            elevation={5}
            loginBtnText={t('login.btnText2')}
            style={styles.btn_parent_style}
            googleImage
            onPress={() => {
              // navigation.navigate('OTP', {pn: phoneNumber});
              GoogleLoginHandler();
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
        </View>

        {/* </ScrollView> */}

      </ImageBackground >
    </KeyboardAvoidingView>

  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  logo_top_box: {
    width: width,
    height: height * 0.20,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottom_view_style: {
    width: '100%',
    backgroundColor: Customcolor.white,
    paddingHorizontal: 25,
    paddingVertical: vertScale(50),
    // marginTop: 50,
    borderTopEndRadius: vertScale(20),
    borderTopLeftRadius: vertScale(20),
    borderRadius: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0
  },
  txt_title_style: {
    color: Customcolor.textcolor,
    fontSize: fontSize.h5,
    fontFamily: colors.Regularj,
  },
  or_text_style: {
    marginVertical: vertScale(20),
    alignSelf: 'center',
    color: Customcolor.textcolor,
    fontWeight: '600',
  },
  btn_parent_style: {
    width: '60%',
    height: vertScale(45),
    backgroundColor: '#fff',
    borderRadius: 30,
    elevation: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  btn_text_style: {
    color: Customcolor.textcolor,
    fontWeight: '500',
  },
  logo_top_image: {
    height: vertScale(60),
    width: '68%',
  },
  inputText_phone: {
    borderWidth: 1,
    borderRadius: 5,
    height: vertScale(40),
    paddingLeft: vertScale(50),
    fontSize: fontSize.reqular,
    color: Customcolor.black,
  },
  mobile_text_style: {
    position: 'absolute',
    top: vertScale(-6),
    left: horizScale(10),
    fontSize: fontSize.tiny,
    backgroundColor: Customcolor.white,
    paddingHorizontal: 2,
    fontFamily: colors.Regularm,
    color: '#3d3c3c',
  },
});
