import {
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
  ScrollView,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../home/styles';
import { globalshedow, globalshedow as shedow, globalStyle } from '../../globalUtils/globalutil';
import { useTranslation } from 'react-i18next';
import { useHomeAction } from './Action';
import GradientBtn from '../custom_componets/GradientBtn';
import CustomInputField from '../custom_componets/CustomInputField';

const { height, width } = Dimensions.get('screen');
const Home = () => {
  const { t } = useTranslation();
  const { isLoading, setIsLoading, categoryData, _toggleHandler, Array, navigation, currentAccount, _generatWallerHandler, _passwordHandler, password } = useHomeAction();

  const VerifyAccountView = () => {
    if (!currentAccount?.verified)
      return <View style={[styles.bottom_view_style, globalshedow]}>
        <Text style={styles.subheading_text_style}>
          {` Please Verified Your Account, \n
          To Gain Access`}
        </Text>
        <GradientBtn
          loginBtnText={'Verify'}
          bgColor={'#D25C34'}
          bgColor2={'#951516'}
          color={'#fff'}
          height={40}
          borderRadius={5}
          icon_color={'#fff'}
          onPress={() => {
            navigation.navigate('kyc');
          }}
        />
      </View>
    else if (currentAccount?.wallet === null)
      return (<View style={[styles.bottom_view_style, globalshedow]}>
        <Text style={styles.subheading_text_style}>{`Finish Your Account Setup`}</Text>
        <TextInput
          placeholder='Enter secure password '
          value={password}
          onChangeText={(e) => _passwordHandler(e)}
          placeholderTextColor={'#000'}
          style={styles.text_input_style}
        />

        <GradientBtn
          loginBtnText={'Complete'}
          bgColor={'#D25C34'}
          bgColor2={'#951516'}
          color={'#fff'}
          height={40}
          borderRadius={5}
          icon_color={'#fff'}
          onPress={_generatWallerHandler}
        />

      </View>)
    else return (<View
      style={[
        styles.item_top_box,
        { justifyContent: 'center', alignItems: 'center' },
      ]}>
      <Text
        style={{
          alignItems: 'center',
          fontSize: 20,
          fontWeight: '700',
          marginTop: 140,
          color: 'gray',
        }}>
        No Certificate Marksheet
      </Text>
    </View>)
  };


  return (
    <ImageBackground
      source={require('../../Images/home_bg2.png')}
      style={styles.container}>
      {isLoading && <ActivityIndicator size={40} color={'#951516'} style={globalStyle.indicator_style} />}
      <TouchableOpacity onPress={_toggleHandler} style={styles.top_icon_box}>
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

        {VerifyAccountView()}
        <ScrollView>
          {/* {Array?.map((item, index) => {
              // console.log('item data home', item?.item?.data);
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
            })} */}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default Home;
