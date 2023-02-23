import { StyleSheet, Text, View, ScrollView, ImageBackground, Image, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { globalcolors, globalStyle } from '../../globalUtils/globalutil'
import CustomHeader from '../custom_componets/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from '../send_document/styles'
import GradientBtn from '../custom_componets/GradientBtn';
import { useTranslation } from 'react-i18next';
const SendDocuments = () => {
    const { t } = useTranslation()
    const navigation = useNavigation();
    const [checked, setChecked] = React.useState(true);
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../Images/send_history_bg.png')}
                style={globalStyle.bg_image_style}
            >
                <CustomHeader
                    header_name={t('sendDocuments.header name')}
                    left_icon={'chevron-back'}
                    leftOnpress={() => navigation.goBack()}
                />
                <View style={styles.top_container}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Image
                            source={require('../../Images/logo_name.png')}
                            style={{ height: 28, width: 106 }}
                        />
                        <View style={styles.text_input_top_container}>
                            <Text style={styles.text_inpute_top_text_style}>{t('sendDocuments.enter the address')}</Text>
                            <TextInput
                                style={styles.text_input_style}
                            />
                        </View>
                        <View style={styles.text_input_top_container}>
                            <Text style={styles.text_inpute_top_text_style}>{t('sendDocuments.duration')}</Text>
                            <TextInput
                                style={[styles.text_input_style, { paddingRight: 40 }]}

                            />
                            <View style={styles.icon_box_text_input}>
                                <Icon name={'calendar'} size={22} color={globalcolors.icon_color} />
                            </View>
                        </View>

                        <View style={styles.bottom_container}>
                            <Text style={styles.bottom_text_style}>{t('sendDocuments.notify on email')}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={styles.bottom_text_style}>{t('sendDocuments.enable')}</Text>
                                <TouchableOpacity onPress={() => setChecked(!checked)} style={styles.chech_box_top_container}>
                                    {checked ?
                                        <Icon name={'checkbox-outline'} size={20} color={globalcolors.icon_color} />
                                        :
                                        <Icon name={'square-outline'} size={20} color={globalcolors.icon_color} />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <GradientBtn
                            loginBtnText={t('sendDocuments.send')}
                            bgColor2={'#D84B23'}
                            bgColor={'#951516'}
                            color={'#ffffff'}
                            marginTop={20}
                            height={40}
                            borderRadius={5}
                        />
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}

export default SendDocuments

