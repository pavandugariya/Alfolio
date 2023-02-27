import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { globalfonts, globalStyle } from '../../globalUtils/globalutil'
import CustomHeader from '../custom_componets/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Ionicons";
import Icons from "react-native-vector-icons/MaterialIcons";
import { settingsutils } from './settingsutils';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';
import { Picker } from '@react-native-picker/picker';

const Setting = () => {
    const { t, i18n } = useTranslation();
    const navigation = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState();

    const changeLanguageHandler = () => {
        selectedLanguage != 'Hindi' && i18n.changeLanguage('hi')
        selectedLanguage != 'English' && i18n.changeLanguage('en')
    }

    return (
        <ImageBackground
            source={require('../../Images/profile_bg.png')}
            style={globalStyle.bg_image_style}
        >
            <CustomHeader
                header_name={t('settings.settings')}
                left_icon={'chevron-back'}
                leftOnpress={() => navigation.goBack()}
            />
            <Image
                source={require('../../Images/logo_name.png')}
                style={{ height: 40, width: 123, marginTop: 40, marginLeft: '8%' }}
            />
            <View style={styles.top_container}>
                <TouchableOpacity style={styles.bottom_top_inner_container}>
                    <View style={styles.bottom_name_container}>
                        <Icon name={'notifications-outline'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                        <Text style={styles.name_text_style}>{t('settings.push notification')}</Text>
                    </View>
                    <View>
                        <Icon name={'chevron-forward-outline'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottom_top_inner_container}>
                    <View style={styles.bottom_name_container}>
                        <Icon name={'notifications-outline'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                        <Text style={styles.name_text_style}>{t('settings.email notification')}</Text>
                    </View>
                    <View>
                        <Icon name={'chevron-forward-outline'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottom_top_inner_container}>
                    <View style={styles.bottom_name_container}>
                        <Icon name={'notifications-outline'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                        <Text style={styles.name_text_style}>{t('settings.sms notification')}</Text>
                    </View>
                    <View>
                        <Icon name={'chevron-forward-outline'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottom_top_inner_container}>
                    <View style={styles.bottom_name_container}>
                        <Icons name={'language'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                        <Text style={styles.name_text_style}>{t('settings.language')}</Text>
                    </View>
                    <View>
                        <Icon name={'chevron-forward-outline'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                    </View>
                </TouchableOpacity>
                <View style={styles.bottom_inner_container}>
                    <View style={styles.language_btn_box_style}>
                        <Icons name={'language'} size={settingsutils.icon_size} color={settingsutils.icon_color} />
                    </View>

                    <Picker
                        style={{
                            marginTop: -10
                        }}
                        dropdownIconColor={'#951516'}
                        mode={'dropdown'}
                        color={'#951516'}
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) => {

                            setSelectedLanguage(itemValue)
                            changeLanguageHandler()
                        }
                        }>
                        <Picker.Item label={"Language"} value="select" />
                        <Picker.Item label={"Hindi"} value="Hindi" />
                        <Picker.Item label={"English"} value="English" />

                    </Picker>
                </View>
                <View style={styles.circle_style}></View>
            </View>
        </ImageBackground>
    )
}

export default Setting


