import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icone from 'react-native-vector-icons/Ionicons';
import Icones from 'react-native-vector-icons/MaterialIcons';
import {Drawer, Divider} from 'react-native-paper';
import {globalfonts} from '../../globalUtils/globalutil';
import {useTranslation} from 'react-i18next';
import {useActionSwitchAccount} from './ActionSwitchAccount';
import {base_url} from '../../../env';
import {postData} from '../../Api/Api';
import {UserTokenHandler} from '../../Redux/Action/AuthAction/AuthAction';
import {useDispatch} from 'react-redux';
import RNSecureStorage from 'rn-secure-storage';

const {height, width} = Dimensions.get('screen');
const CustomDraweContent = ({iconColor, iconSize}) => {
  const {t} = useTranslation();
  const SignOutDispatch = useDispatch();

  const _logOutHandler = () => {
    try {
      SignOutDispatch(UserTokenHandler(null));
      RNSecureStorage.exists('userToken').then(res => {
        if (res) {
          const response = RNSecureStorage.remove('userToken');
          console.log('res ...', response);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const {
    clicked,
    profileData,
    setClicked,
    profilAccountHandler,
    isLoading,
    navigation,
  } = useActionSwitchAccount();
  const currentAccount = profileData?.profileData?.currentAccount;
  // console.log('response data', profileData.profileData.currentAccount.id);
  // const _switchAccountHander = async id => {
  //   const objData = {
  //     accountId: id,
  //   };
  //   profilAccountHandler();
  //   const res = await postData(`${base_url}/auth/web/logout`, objData);
  //   console.log('response', res.accountId);
  // };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/drawer_bg.png')}
        style={styles.bg_img_style}>
        <DrawerContentScrollView>
          <View style={{flex: 1, height: height * 0.7}}>
            <Drawer.Section style={{marginTop: 20}} showDivider={false}>
              <Image
                source={require('../../Images/logo_name.png')}
                style={styles.logo_name_style}
              />

              {/* <DrawerItem
                icon={() => (
                  <Icone name={'home'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen1')}
                labelStyle={[styles.txt_style, { color: iconColor }]}
                onPress={() => {
                  navigation.navigate('WelcomOnboard');
                }}
              /> */}
              <DrawerItem
                icon={() => (
                  <Icone name={'home'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen1')}
                labelStyle={[styles.txt_style, {color: iconColor}]}
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone name={'person'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen2')}
                labelStyle={[styles.txt_style, {color: iconColor}]}
                onPress={() => {
                  navigation.navigate('Profile');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone name={'star'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen3')}
                labelStyle={[styles.txt_style, {color: iconColor}]}
                onPress={() => {
                  navigation.navigate('Achivement');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone
                    name={'notifications'}
                    size={iconSize}
                    color={iconColor}
                  />
                )}
                label={t('drawer.screen4')}
                labelStyle={[styles.txt_style, {color: iconColor}]}
                onPress={() => {
                  navigation.navigate('Notification');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone
                    name={'scan-circle'}
                    size={iconSize}
                    color={iconColor}
                  />
                )}
                label={t('drawer.screen5')}
                labelStyle={[styles.txt_style, {color: iconColor}]}
                onPress={() => {
                  navigation.navigate('ScanQrCode');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone name={'settings'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen6')}
                labelStyle={[styles.txt_style, {color: iconColor}]}
                onPress={() => {
                  navigation.navigate('Settings');
                }}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        {clicked ? (
          <View style={styles.view_data_style}>
            {isLoading && <ActivityIndicator size={30} color={'#951516'} />}
            <ScrollView>
              {profileData?.profileData?.accounts?.map((item, id) => {
                return (
                  <TouchableOpacity
                    key={id}
                    onPress={() => {
                      profilAccountHandler(item.id);
                    }}
                    style={styles.Add_Account_style}>
                    <Icone name={'person'} size={iconSize} color={iconColor} />
                    <Text style={styles.txt_item_style}>{item?.firstName}</Text>
                    {item.id === profileData.profileData.currentAccount.id && (
                      <Image
                        style={styles.check_image_style}
                        source={require('../../Images/check.png')}
                      />
                    )}
                  </TouchableOpacity>
                );
              })}
              <View style={{marginTop: 15}}>
                <DrawerItem
                  icon={() => (
                    <Icone
                      name={'add-circle-sharp'}
                      size={iconSize}
                      color={iconColor}
                    />
                  )}
                  label={t('drawer.addprofile')}
                  labelStyle={[styles.txt_style, {color: iconColor}]}
                  onPress={async () => {
                    navigation.navigate('ProfileSetup');
                  }}
                />
              </View>
            </ScrollView>
          </View>
        ) : null}
        <Divider bold={true} style={{backgroundColor: iconColor}} />
        <Drawer.Section style={{marginBottom: 20}} showDivider={false}>
          <DrawerItem
            icon={() => (
              <Icones
                name={'switch-account'}
                size={iconSize}
                color={iconColor}
              />
            )}
            label={t('drawer.switchAccount')}
            labelStyle={[styles.txt_style, {color: iconColor}]}
            onPress={async () => {
              setClicked(!clicked);
            }}
          />
          <View style={{bottom: 10}}>
            {profileData?.profileData?.currentAccount && (
              <TouchableOpacity style={styles.Add_Account_style}>
                <Icone name={'person'} size={iconSize} color={iconColor} />
                <Text style={styles.txt_item_style}>
                  {currentAccount?.firstName}
                </Text>
                <Image
                  style={styles.check_image_style}
                  source={require('../../Images/check.png')}
                />
              </TouchableOpacity>
            )}
          </View>
          <DrawerItem
            icon={() => (
              <Icone name={'log-out'} size={iconSize} color={iconColor} />
            )}
            label={t('drawer.signOut')}
            labelStyle={[styles.txt_style, {color: iconColor}]}
            onPress={_logOutHandler}
          />
        </Drawer.Section>
      </ImageBackground>
    </View>
  );
};

export default CustomDraweContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBB05D',
  },
  bg_img_style: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  txt_style: {
    fontSize: 17,
    fontFamily: globalfonts.Regularm,
    fontWeight: '700',
    flexDirection: 'row',
    marginLeft: 12,
    marginTop: 5,
  },
  txt_item_style: {
    fontSize: 17,
    fontWeight: '600',
    color: '#951516',
    marginLeft: 40,
  },
  Add_Account_style: {
    flexDirection: 'row',
    marginLeft: 20,
    paddingTop: 20,
  },
  logo_name_style: {
    height: 34,
    width: 123,
    marginLeft: 20,
    marginBottom: 30,
  },
  check_image_style: {
    width: 18,
    height: 18,
    marginLeft: 20,
    marginTop: 3,
  },
  view_data_style: {
    backgroundColor: '#fff',
    elevation: 2,
    paddingVertical: 10,
    height: 150,
  },
});
