import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import { globalshedow } from '../../globalUtils/globalutil';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { useWelcomeOnboarding } from './Action';
const { height, width } = Dimensions.get('screen');

const WelcomeOnboad = () => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { isLoading, isAccount, numberOfAccount, userData } = useWelcomeOnboarding();

  if (isLoading) {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, }}>
        <ActivityIndicator size={50} color={'#951516'} />
      </View>
    )
  };
  const toggleHandler = () => {
    navigation.openDrawer();
  };
  if (numberOfAccount.length > 0) {
    navigation.navigate('Home');
    console.log('hello jack');
    // toggleHandler();

  }




  return (
    <ImageBackground
      source={require('../../Images/home_bg2.png')}
      style={styles.container}>
      <TouchableOpacity onPress={toggleHandler} style={styles.top_icon_box}>
        <Icon name={'reorder-three-outline'} size={35} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.logo_top_box}>
        <Text style={styles.logo_heading_Text_style}>You</Text>
        <Image
          source={require('../../Images/logo_name.png')}
          style={{
            height: 34,
            width: '40%',
          }}
        />
      </View>
      <View style={[styles.bottom_view_style, globalshedow]}>
        <Text style={styles.heading_text_style}>Welcome OnBoard!</Text>
        <Text style={styles.subheading_text_style}>
          {` Please Setup Your Profile, \n
          to Gain Access`}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProfileSetup');
          }}>
          <Icon
            name={'add-circle-sharp'}
            size={45}
            color={'#951516'}
            alignSelf={'center'}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default WelcomeOnboad;

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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  bottom_view_style: {
    width: width * 0.85,
    backgroundColor: '#fff',
    position: 'relative',
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 60,
    // top: 60,
    opacity: 0.8,
    alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  heading_text_style: {
    fontFamily: 'Jeko DEMO',
    fontWeight: 700,
    fontSize: 20,
    alignSelf: 'center',
    color: '#951516',
  },
  subheading_text_style: {
    fontFamily: 'Jeko DEMO',
    fontWeight: 700,
    fontSize: 16,
    alignSelf: 'center',
    color: '#000000',
    marginVertical: 20,
  },

  top_icon_box: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 40,
    height: 40,
    left: 20,
    top: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_heading_Text_style: {
    fontFamily: '',
    fontWeight: '700',
    fontSize: 36,
    color: '#951516',
    marginRight: 10,
  },
});
