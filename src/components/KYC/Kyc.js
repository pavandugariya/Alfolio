import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import {
  globalcolors,
  globalfonts,
  globalStyle,
} from '../../globalUtils/globalutil';
import { TextInput } from 'react-native-paper';
import GradientBtn from '../custom_componets/GradientBtn';
import CustomInputField from '../custom_componets/CustomInputField';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { postData } from '../../Api/Api';
import { base_url } from '../../../env';
import { vertScale } from '../../Utility/Layout';

const Kyc = () => {
  const { t } = useTranslation();


  const navigation = useNavigation();
  const { height, width } = Dimensions.get('screen');
  const [aadharNumber, setAadharNumber] = useState('');
  const [aadharNumberValidation, setAadharNumberValidation] = useState(true)


  const _sendAadharOtpHandler = () => {

    if (aadharNumber.length == 12 && aadharNumberValidation) {
      navigation.navigate('verifyOtp', { aadharNumber: aadharNumber })
    } else {
      setAadharNumberValidation(false)
    }

  };
  const _aadharNumberValidationHandler = (val) => {
    const regex = /^[0-9\b]+$/;
    if (regex.test(val) || val == '') {
      setAadharNumber(val);
      setAadharNumberValidation(true)
    } else {
      setAadharNumberValidation(false);
    }
  }

  return (
    <>
      <ImageBackground
        source={require('../../Images/home_bg2.png')}
        blurRadius={50}
        style={styles.container}>
        <View style={styles.input_box_style}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: '',
                fontSize: 20,
                fontWeight: '700',
                color: '#000',
              }}>
              KYC
            </Text>
          </View>

          <View style={styles.text_input_top_container}>
            <Text style={styles.text_inpute_top_text_style}>
              {t('kyc.Aadhar')}
            </Text>
            <TextInput
              style={[styles.input_text_style, { paddingRight: 40 }]}
              textname={'Kyc'}
              onChangeText={(e) => _aadharNumberValidationHandler(e)}
              value={aadharNumber}
              keyboardType="numeric"
              placeholder="Enter Your Aadhar No."
              placeholderTextColor="#000"
              maxLength={12}
            />

          </View>
          {!aadharNumberValidation &&
            <Animatable.Text animation={'slideInLeft'} style={globalStyle.validate_text_style}>Enter Correct Aadhar Number </Animatable.Text>
          }
          <GradientBtn
            loginBtnText={'Send Otp'}
            bgColor={'#D25C34'}
            bgColor2={'#951516'}
            color={'#fff'}
            marginTop={25}
            height={40}
            borderRadius={5}
            icon_color={'#fff'}
            icon_size={24}
            // icon_name={'share-social'}
            // onPress={otpVerification}
            onPress={() => {
              _sendAadharOtpHandler();
            }}
          />
          <View style={styles.skip_button_bottom}>
            <GradientBtn
              loginBtnText={'Skip'}
              bgColor={'#D25C34'}
              bgColor2={'#951516'}
              color={'#fff'}
              height={40}
              width={130}
              borderRadius={5}
              icon_color={'#fff'}
              icon_size={24}
              onPress={() => {
                navigation.navigate('Drawer');
              }}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Kyc;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    blurRadius: 50,
  },
  input_box_style: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 20,
    height: '83%',
    paddingHorizontal: 40,
    paddingVertical: 40,
    marginVertical: 60,
    opacity: 0.8,
  },
  input_text_style: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    paddingLeft: 5,
    fontSize: 15,
    color: '#000',
    backgroundColor: '#fff',
    marginTop: 10,
  },
  text_inpute_top_text_style: {
    fontSize: 12,
    color: globalcolors.icon_color,
    fontFamily: globalfonts.Regularm,
  },
  text_input_top_container: {
    marginTop: 20,
  },
  skip_button_bottom: {
    // background: linear - gradient(`270.08deg, #951516 1.59%, #D25C34 100.31%`),
    padding: 20,
    borderRadius: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
