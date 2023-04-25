import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {globalfonts, globalStyle} from '../../globalUtils/globalutil';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('onboarding');
    }, 2000);
  }, []);

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
