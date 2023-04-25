import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icone from 'react-native-vector-icons/Ionicons';
import Icones from 'react-native-vector-icons/MaterialIcons';
import { Drawer, Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { globalfonts } from '../../globalUtils/globalutil';
import { useTranslation } from 'react-i18next';

const { height, width } = Dimensions.get('screen');
const CustomDraweContent = ({ iconColor, iconSize }) => {
  const { t } = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/drawer_bg.png')}
        style={styles.bg_img_style}>
        <DrawerContentScrollView>
          <View style={{ flex: 1, height: height * 0.7 }}>
            <Drawer.Section style={{ marginTop: 20 }} showDivider={false}>
              <Image
                source={require('../../Images/logo_name.png')}
                style={{
                  height: 34,
                  width: 123,
                  marginLeft: 20,
                  marginBottom: 30,
                }}
              />

              {/* <DrawerItem
                icon={() => (
                  <Icone name={'home'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen1')}
                labelStyle={[styles.txt_style, {color: iconColor}]}
                onPress={() => {
                  navigation.navigate('WelcomOnboard');
                }}
              /> */}
              <DrawerItem
                icon={() => (
                  <Icone name={'home'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen1')}
                labelStyle={[styles.txt_style, { color: iconColor }]}
                onPress={() => {
                  navigation.navigate('Home');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone name={'person'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen2')}
                labelStyle={[styles.txt_style, { color: iconColor }]}
                onPress={() => {
                  navigation.navigate('Profile');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone name={'star'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen3')}
                labelStyle={[styles.txt_style, { color: iconColor }]}
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
                labelStyle={[styles.txt_style, { color: iconColor }]}
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
                labelStyle={[styles.txt_style, { color: iconColor }]}
                onPress={() => {
                  navigation.navigate('ScanQrCode');
                }}
              />
              <DrawerItem
                icon={() => (
                  <Icone name={'settings'} size={iconSize} color={iconColor} />
                )}
                label={t('drawer.screen6')}
                labelStyle={[styles.txt_style, { color: iconColor }]}
                onPress={() => {
                  navigation.navigate('Settings');
                }}
              />
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>

        <View
          style={{
            backgroundColor: '#fff',
            elevation: 2,
            paddingVertical: 10,
            height: 150,
          }}>
          <ScrollView>
            <DrawerItem
              icon={() => (
                <Icones name={'person-add'} size={iconSize} color={iconColor} />
              )}
              label={t('drawer.name1')}
              labelStyle={[styles.txt_style, { color: iconColor }]}
              onPress={async () => {
                // navigation.navigate('onboarding');
              }}
            />
            <DrawerItem
              icon={() => (
                <Icone name={'person-add'} size={iconSize} color={iconColor} />
              )}
              label={t('drawer.name')}
              labelStyle={[styles.txt_style, { color: iconColor }]}
              onPress={async () => {
                // navigation.navigate('onboarding');
              }}
            />
            <DrawerItem
              icon={() => (
                <Icone
                  name={'add-circle-sharp'}
                  size={iconSize}
                  color={iconColor}
                />
              )}
              label={t('drawer.addprofile')}
              labelStyle={[styles.txt_style, { color: iconColor }]}
              onPress={async () => {
                // navigation.navigate('onboarding');
              }}
            />
          </ScrollView>
        </View>
        <Divider bold={true} style={{ backgroundColor: iconColor }} />
        <Drawer.Section style={{ marginBottom: 20 }} showDivider={false}>
          <DrawerItem
            icon={() => (
              <Icones
                name={'switch-account'}
                size={iconSize}
                color={iconColor}
              />
            )}
            label={t('drawer.switchAccount')}
            labelStyle={[styles.txt_style, { color: iconColor }]}
            onPress={async () => {
              // navigation.navigate('onboarding');
            }}
          />
          <DrawerItem
            icon={() => (
              <Icone name={'log-out'} size={iconSize} color={iconColor} />
            )}
            label={t('drawer.signOut')}
            labelStyle={[styles.txt_style, { color: iconColor }]}
            onPress={async () => {
              navigation.navigate('onboarding');
            }}
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
  },
});
