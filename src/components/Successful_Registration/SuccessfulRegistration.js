import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
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
import {useTranslation} from 'react-i18next';

const SuccessfulRegistration = () => {
  const {t} = useTranslation();

  const [kycs, setkycs] = useState();

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
            <Text style={styles.heading_text_style}>
              {' You are successfully '}
            </Text>
            <Text style={styles.heading_text_style}>{'registered in'}</Text>
          </View>
          <View style={styles.your_text_box_style}>
            <Image
              source={require('../../Images/logo_name.png')}
              style={{
                height: 35,
                width: 145,
              }}
              resizeMode={'contain'}
            />
          </View>
          <GradientBtn
            loginBtnText={'Done'}
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
              navigation.navigate('Home');
            }}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default SuccessfulRegistration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    blurRadius: 50,
  },
  input_box_style: {
    width: '95%',
    backgroundColor: '#fff',
    borderRadius: 20,
    height: '43%',
    paddingHorizontal: 40,
    paddingVertical: 40,
    // alignSelf: 'center',
    marginVertical: 60,
    opacity: 0.8,
  },
  heading_text_style: {
    fontFamily: 'Jeko DEMO',
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    marginTop: 10,
  },
  sub_title_style: {
    fontFamily: 'Jeko DEMO',
    fontSize: 16,
    fontWeight: '600',
    color: '#951516',
    marginTop: 10,
  },
  Click_chiledtext_style: {
    color: '#951516',
    fontWeight: '700',
    fontFamily: 'Jeko DEMO',
  },
  Click_parent_text_style: {
    color: '#737373',
  },
  your_text_box_style: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  your_txt_style: {
    fontSize: 30,
    color: globalcolors.text_color,
    fontFamily: globalfonts.Extra_Bold_j,
    marginRight: -15,
  },
});
