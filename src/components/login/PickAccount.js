import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors} from './util';
import CustomInputField from '../custom_componets/CustomInputField';
import ButtonField from '../custom_componets/ButtonField';
import {globalshedow} from '../../globalUtils/globalutil';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {pickAccount} from '../../lang/main.json';
import {useTranslation} from 'react-i18next';
const {height, width} = Dimensions.get('screen');

const PickAccount = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  const clickHandler = () => {
    navigation.navigate('Drawer');
  };
  return (
    <ImageBackground
      source={require('../../Images/home_bg2.png')}
      style={styles.container}>
      <View style={styles.logo_top_box}>
        <Image
          source={require('../../Images/logo_name.png')}
          style={{
            height: 60,
            width: '68%',
          }}
        />
      </View>
      <View style={[styles.bottom_view_style, globalshedow]}>
        <ScrollView>
          <View style={{alignItems: 'center'}}>
            <Text style={styles.txt_title_style}>{t('pickAccount.title')}</Text>

            <TouchableOpacity
              style={styles.top_text_container}
              onPress={clickHandler}>
              <Icon name={'person-outline'} size={20} color={'#757171'} />
              <Text numberOfLines={1} style={styles.text_style_email}>
                Vikrant.mongoose@gmail.com
              </Text>
              <TouchableOpacity style={{paddingHorizontal: 10}}>
                <Icon
                  name={'ellipsis-vertical-outline'}
                  size={20}
                  color={'#757171'}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.top_text_container}>
              <Icon name={'person-outline'} size={20} color={'#757171'} />
              <Text numberOfLines={1} style={styles.text_style_email}>
                Krishnapal.mongoose@gmail.com
              </Text>
              <TouchableOpacity style={{paddingHorizontal: 10}}>
                <Icon
                  name={'ellipsis-vertical-outline'}
                  size={20}
                  color={'#757171'}
                />
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity style={styles.top_text_container}>
              <Icon name={'person-outline'} size={20} color={'#757171'} />
              <Text numberOfLines={1} style={styles.text_style_email}>
                Pawan.mongoose@gmail.com
              </Text>
              <TouchableOpacity style={{paddingHorizontal: 10}}>
                <Icon
                  name={'ellipsis-vertical-outline'}
                  size={20}
                  color={'#757171'}
                />
              </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.top_text_container,
                {justifyContent: 'flex-start'},
              ]}>
              <Icon name={'add-outline'} size={20} color={'#757171'} />
              <Text
                numberOfLines={1}
                style={[styles.text_style_email, {left: 12}]}>
                {t('pickAccount.use another account')}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default PickAccount;

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
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  bottom_view_style: {
    width: width * 0.95,
    backgroundColor: '#fff',
    position: 'relative',
    bottom: 0,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    borderRadius: 20,
    paddingHorizontal: 40,
    paddingVertical: 40,
    top: 100,
    alignSelf: 'center',
  },
  txt_title_style: {
    color: colors.txt_color,
    fontSize: 20,
    fontFamily: colors.Regularj,
    marginBottom: 10,
  },
  text_input_style: {
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    fontSize: 15,
    width: '12%',
    marginLeft: 8,
    alignItems: 'center',
  },
  top_text_container: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    flexDirection: 'row',
  },
  text_style_email: {
    width: '70%',
    color: '#757171',
    fontFamily: colors.Regularj,
  },
});
