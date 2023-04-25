import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {globalfonts, globalStyle} from '../../globalUtils/globalutil';
import CustomHeader from '../custom_componets/CustomHeader';
import GradientBtn from '../custom_componets/GradientBtn';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {profileutils} from './utils';
import {useNavigation} from '@react-navigation/native';
// import {styles} from './styles';
import {styles} from '../profile/styles';
import {useTranslation} from 'react-i18next';

const Profile = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const toggleHandler = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/profile_bg.png')}
        style={globalStyle.bg_image_style}>
        <CustomHeader
          header_name={t('profile.profile')}
          // left_icon={'chevron-back'}

          // leftOnpress={() => navigation.goBack()}
        />
        <TouchableOpacity
          onPress={() => {
            toggleHandler();
          }}
          style={styles.top_icon_box}>
          <Icon name={'reorder-three-outline'} size={35} color={'#000'} />
        </TouchableOpacity>
        <View style={styles.img_box_top_container}>
          <View style={styles.img_container}>
            <Image
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
              }}
              style={{height: '100%', width: '100%'}}
              resizeMode={'contain'}
            />
          </View>
          <View style={styles.name_top_container}>
            <Text numberOfLines={1} style={styles.name_txt_style}>
              {t('profile.name')}
            </Text>
            <Text numberOfLines={1} style={styles.email_txt_style}>
              {t('profile.email')}
            </Text>
            <GradientBtn
              loginBtnText={t('profile.edit profile')}
              bgColor2={'#D84B23'}
              bgColor={'#951516'}
              color={'#ffffff'}
              marginTop={17}
              height={40}
              borderRadius={10}
              // paddingHorizontal={10}
              onPress={() => navigation.navigate('EditProfile')}
            />
          </View>
        </View>
        <View style={styles.bottom_top_container}>
          <TouchableOpacity style={styles.bottom_top_inner_container}>
            <View style={styles.bottom_name_container}>
              <AntDesign
                name={'download'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
              <Text style={styles.name_text_style}>
                {t('profile.download')}
              </Text>
            </View>
            <View>
              <Icon
                name={'chevron-forward-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom_top_inner_container}>
            <View style={styles.bottom_name_container}>
              <Icons
                name={'language'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
              <Text style={styles.name_text_style}>
                {t('profile.language')}
              </Text>
            </View>
            <View>
              <Icon
                name={'chevron-forward-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom_top_inner_container}>
            <View style={styles.bottom_name_container}>
              <Icon
                name={'location-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
              <Text style={styles.name_text_style}>
                {t('profile.location')}
              </Text>
            </View>
            <View>
              <Icon
                name={'chevron-forward-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom_top_inner_container}>
            <View style={styles.bottom_name_container}>
              <Icon
                name={'heart-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
              <Text style={styles.name_text_style}>
                {t('profile.favourites')}
              </Text>
            </View>
            <View>
              <Icon
                name={'chevron-forward-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.bottom_top_inner_container}>
            <View style={styles.bottom_name_container}>
              <Icon
                name={'trash-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
              <Text style={styles.name_text_style}>
                {t('profile.clean history')}
              </Text>
            </View>
            <View>
              <Icon
                name={'chevron-forward-outline'}
                size={profileutils.icon_size}
                color={profileutils.icon_color}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Profile;
