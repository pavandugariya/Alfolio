import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {
  globalcolors,
  globalfonts,
  globalStyle,
} from '../../globalUtils/globalutil';
import {TextInput} from 'react-native-paper';
import GradientBtn from '../custom_componets/GradientBtn';
import CustomInputField from '../custom_componets/CustomInputField';
import {useTranslation} from 'react-i18next';
import {Customcolor} from '../../Utility/Customcolor';
import {fontSize} from '../../Utility/Fontsize';

const VerifyOtp = () => {
  const {t} = useTranslation();
  const [otp, setOtp] = useState();

  const navigation = useNavigation();
  const {height, width} = Dimensions.get('screen');

  return (
    <>
      <ImageBackground
        source={require('../../Images/home_bg2.png')}
        blurRadius={50}
        style={styles.container}>
        <View style={styles.input_box_style}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.verify_otp_style}>Verify Otp</Text>
          </View>

          {/* <CustomInputField
            textname={'Enter Otp'}
            onChangeText={setOtp}
            value={otp}
            placeholder=""
            marginTop={5}
          /> */}

          <View style={styles.text_input_top_container}>
            <Text style={styles.text_inpute_top_text_style}>
              {t('VerifyOtp.Verify')}
            </Text>
            <TextInput
              style={[styles.input_text_style, {paddingRight: 40}]}
              textname={'State'}
              onChangeText={setOtp}
              value={otp}
              placeholder="5 2 4 9 6 8"
              placeholderTextColor="#000"
            />
          </View>

          <GradientBtn
            loginBtnText={'Verify'}
            bgColor={'#D25C34'}
            bgColor2={'#951516'}
            color={'#fff'}
            marginTop={20}
            height={40}
            borderRadius={5}
            icon_color={'#fff'}
            icon_size={24}
            // icon_name={'share-social'}
            // onPress={otpVerification}
            onPress={() => {
              navigation.navigate('youdidis');
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default VerifyOtp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
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
    // alignSelf: 'center',
    marginVertical: 60,
    opacity: 0.8,
  },
  sub_title_style: {
    fontFamily: 'Jeko DEMO',
    fontSize: 16,
    fontWeight: '600',
    color: '#951516',
    marginTop: 10,
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
  verify_otp_style: {
    fontFamily: '',
    fontSize: fontSize.h5,
    fontWeight: '700',
    color: Customcolor.black,
  },
});
