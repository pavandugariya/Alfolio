import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { globalfonts, globalStyle } from '../../globalUtils/globalutil';
import { useDispatch } from 'react-redux';
import { _splashLoadingHandler, UserTokenHandler } from '../../Redux/Action/AuthAction/AuthAction';
import RNSecureStorage from 'rn-secure-storage';

const Splash = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    _getUserTokenHandler();
    setTimeout(() => {
      dispatch(_splashLoadingHandler(true));
    }, 2000);
  }, []);

  const _getUserTokenHandler = async () => {
    try {
      RNSecureStorage.get("userToken").then((value) => {
        console.log('get user token..>', value) // Will return direct value
        dispatch(UserTokenHandler(value));
      }).catch((err) => {
        console.log(err)
      })
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <ImageBackground
      source={require('../../Images/home_bg2.png')}
      blurRadius={50}
      style={styles.container}>
      <Image
        source={require('../../Images/alfolioLogo.png')}
        style={styles.logo_style}
      />
      <View style={styles.text_box}>
        <Animatable.Text animation={'slideInLeft'} style={styles.txt_style}>
          Al
        </Animatable.Text>
        {/* <Animatable.Text animation={'slideInUp'} style={styles.txt_style}>
          Fo
        </Animatable.Text> */}
        <Animatable.Text animation={'slideInRight'} style={styles.txt_style}>
          Folio
        </Animatable.Text>
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    blurRadius: 50,
  },
  logo_style: {
    height: 137,
    width: 137,
  },
  txt_style: {
    color: '#000',
    fontSize: 45,
    alignSelf: 'center',
    fontFamily: globalfonts.Medium_m,
  },
  text_box: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
});
