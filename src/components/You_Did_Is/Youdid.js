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
import {globalfonts, globalStyle} from '../../globalUtils/globalutil';
import {TextInput} from 'react-native-paper';
import GradientBtn from '../custom_componets/GradientBtn';

const Youdid = () => {
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
          <View>
            <Text style={styles.heading_text_style}> Your DID IS </Text>
            <Text style={styles.sub_title_style}> khdas---fdf..fdsd.</Text>
            <Text style={styles.heading_text_style}>
              Your Wallet Address is
            </Text>
            <Text style={styles.sub_title_style}> fxfort...df.43.</Text>
          </View>
          <GradientBtn
            loginBtnText={'Your are set to go!!!'}
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
              navigation.navigate('SuccessfulRegistration');
            }}
          />
          <View>
            <Text style={styles.Click_parent_text_style}>
              <Text style={styles.Click_chiledtext_style}> Click here </Text>
              to check and manually secure your account secret backup
            </Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Youdid;

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
  heading_text_style: {
    fontFamily: 'Jeko DEMO',
    fontSize: 18,
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
});
