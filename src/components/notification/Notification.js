import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {globalStyle} from '../../globalUtils/globalutil';
import CustomHeader from '../custom_componets/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Notification = () => {
  const navigation = useNavigation();

  const toggleHandler = () => {
    navigation.openDrawer();
  };
  return (
    <ImageBackground
      source={require('../../Images/profile_bg.png')}
      style={globalStyle.bg_image_style}>
      <CustomHeader
        header_name={'Notifications'}
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
    </ImageBackground>
  );
};

export default Notification;

const styles = StyleSheet.create({
  top_icon_box: {
    position: 'absolute',
    left: 10,
    top: 10,
    // backgroundColor: homecolors.toggle_bg_color,
    borderRadius: 7,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
