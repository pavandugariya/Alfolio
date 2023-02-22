import { View, StyleSheet, TouchableOpacity, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer'
import Icone from 'react-native-vector-icons/Ionicons';
import Icones from 'react-native-vector-icons/MaterialIcons';
import { Drawer, Divider } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';
import { globalfonts } from '../../globalUtils/globalutil';
import { useTranslation } from 'react-i18next';

const CustomDraweContent = ({ iconColor, iconSize }) => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../Images/drawer_bg.png')}
                style={styles.bg_img_style}
            >

                <DrawerContentScrollView>
                    <View>
                        <Drawer.Section style={{ marginTop: 20, }} showDivider={false} >
                            <Image
                                source={require('../../Images/logo_name.png')}
                                style={{ height: 34, width: 123, marginLeft: 20, marginBottom: 30 }}
                            />

                            <DrawerItem
                                icon={() => <Icone name={'home'} size={iconSize} color={iconColor} />}
                                label={t('drawer.screen1')}
                                labelStyle={[styles.txt_style, { color: iconColor }]}
                                onPress={() => { navigation.navigate('Home') }}
                            />
                            <DrawerItem
                                icon={() => <Icone name={'person'} size={iconSize} color={iconColor} />}
                                label={t('drawer.screen2')}
                                labelStyle={[styles.txt_style, { color: iconColor }]}
                                onPress={() => { navigation.navigate('Profile') }}
                            />
                            <DrawerItem
                                icon={() => <Icone name={'notifications'} size={iconSize} color={iconColor} />}
                                label={t('drawer.screen3')}
                                labelStyle={[styles.txt_style, { color: iconColor }]}
                                onPress={() => { navigation.navigate('Notification') }}
                            />
                            <DrawerItem
                                icon={() => <Icone name={'settings'} size={iconSize} color={iconColor} />}
                                label={t('drawer.screen4')}
                                labelStyle={[styles.txt_style, { color: iconColor }]}
                                onPress={() => { navigation.navigate('Settings') }}
                            />
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Divider bold={true} style={{ backgroundColor: iconColor }} />

                <Drawer.Section style={{ marginBottom: 20 }} showDivider={false} >

                    <DrawerItem
                        icon={() => <Icone name={'log-out'} size={iconSize} color={iconColor} />}
                        label={t('drawer.signOut')}
                        labelStyle={[styles.txt_style, { color: iconColor }]}
                        onPress={async () => {
                        }}
                    />
                </Drawer.Section>
            </ImageBackground>

        </View>
    )
}

export default CustomDraweContent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBB05D'
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
        fontWeight: '600',
    }


})