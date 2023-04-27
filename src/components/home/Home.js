import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../home/styles';
import {globalshedow as shedow} from '../../globalUtils/globalutil';
import {useTranslation} from 'react-i18next';
import {useWelcomeOnboarding} from '../welcome_onboarding_screen/Action';
import Profile from '../profile/Profile';
import {useDispatch} from 'react-redux';
import ProfileReducer from '../../Redux/Reducer/ProfileReducer/ProfileReducer';

const {height, width} = Dimensions.get('screen');
const Home = () => {
  const profiledispatch = useDispatch();
  const Array = [
    {
      id: 1,
      name: 'High school',
      board_name: 'MP BOARD',
    },
    {
      id: 2,
      name: 'Higher secondary school',
      board_name: 'MP BOARD',
    },
    {
      id: 3,
      name: 'Oriental university indore',
      board_name: 'University/board',
    },
  ];

  const {t} = useTranslation();
  const navigation = useNavigation();
  // const toggleHandler = () => {
  //   navigation.openDrawer();
  // };

  const {isLoading, isAccount, numberOfAccount, userData} =
    useWelcomeOnboarding();

  if (isLoading) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size={50} color={'#951516'} />
      </View>
    );
  }
  const toggleHandler = () => {
    navigation.openDrawer();
  };
  if (numberOfAccount.length > 0) {
    navigation.navigate('Home');
  }

  const ProfileHandler = () => {
    try {
      if (isAccount.length > 1) {
        profiledispatch(ProfileReducer.isAccount.verified);
        navigation.navigate('kyc');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const ShowModal = () => {
    return (
      <View>
        {/* <SuccessfulRegistration /> */}
        <text>LSFJSL</text>
      </View>
    );
  };
  return (
    <ImageBackground
      source={require('../../Images/home_bg2.png')}
      style={styles.container}>
      <TouchableOpacity onPress={toggleHandler} style={styles.top_icon_box}>
        <Icon name={'reorder-three-outline'} size={35} color={'#000'} />
      </TouchableOpacity>
      <View style={styles.main_view}>
        <View style={styles.your_text_box_style}>
          <Text style={styles.your_txt_style}>{t('home.your')}</Text>
          <Image
            source={require('../../Images/logo_name.png')}
            style={{
              height: 35,
              width: 145,
            }}
            resizeMode={'contain'}
          />
        </View>
        <ScrollView>
          <View style={styles.item_top_box}>
            {Array.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ShowMarksheet')}
                  key={index}
                  style={[styles.item_box, shedow]}>
                  <Icon
                    name={'document-text-outline'}
                    size={45}
                    color={'#951516'}
                    alignSelf={'center'}
                  />
                  <Text numberOfLines={1} style={styles.item_top_text_style}>
                    {t(item.name)}
                  </Text>
                  <Text numberOfLines={1} style={styles.item_bottom_text_style}>
                    {t(item.board_name)}
                  </Text>
                  <Icons
                    name={'verified'}
                    size={30}
                    color={'#951516'}
                    alignSelf={'center'}
                    marginTop={5}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;
