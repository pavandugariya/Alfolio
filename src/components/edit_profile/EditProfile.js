import { StyleSheet, Text, View, ImageBackground, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { globalfonts, globalStyle } from '../../globalUtils/globalutil'
import CustomHeader from '../custom_componets/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import CustomInputField from '../custom_componets/CustomInputField';
import { Picker, } from '@react-native-picker/picker';
import { styles } from '../edit_profile/styles';
import { useTranslation } from 'react-i18next';

const EditProfile = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <View style={styles.container}>
            <ImageBackground
                style={globalStyle.bg_image_style}
                source={require('../../Images/profile_bg.png')}>
                <CustomHeader
                    header_name={t('editProfile.edit profile')}
                    left_icon={'chevron-back'}
                    right_icon={'checkmark-outline'}
                    leftOnpress={() => navigation.goBack()}
                    rightOnpress={() => navigation.goBack()}
                />
                <View style={styles.top_box_style}>
                    <View style={styles.img_container}>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png" }}
                            style={{ height: '100%', width: '100%' }}
                            resizeMode={'contain'}
                        />
                    </View>
                    <View style={styles.top_text_box}>
                        <Text style={styles.top_text_style}>{t('editProfile.edit profile information')}</Text>
                    </View>
                    <ScrollView>
                        <View style={styles.text_input_top_container}>
                            <CustomInputField
                                textname={t('editProfile.first name')}
                                placeholderText={t('editProfile.enter your name')}
                            />
                            <CustomInputField
                                textname={t('editProfile.last name')}
                                placeholderText={t('editProfile.enter your last name')}
                            />
                            <CustomInputField
                                textname={t('editProfile.location')}
                                placeholderText={t('editProfile.enter your location')}
                            />
                            <CustomInputField
                                textname={t('editProfile.phone no')}
                                placeholderText={t('editProfile.enter your phone no')}
                            />
                            <CustomInputField
                                textname={t('editProfile.email')}
                                placeholderText={t('editProfile.enter yout email')}
                            />
                            <View style={styles.studies_top_container}>

                                <Text style={styles.text_style}>{t('editProfile.studies')}</Text>
                                <View style={{
                                    height: 40,
                                    borderWidth: 1,
                                    borderColor: '#951516',
                                    borderRadius: 5,
                                }}>
                                    <Picker
                                        style={{
                                            marginTop: -10
                                        }}
                                        dropdownIconColor={'#951516'}
                                        mode={'dropdown'}
                                        color={'#951516'}
                                        selectedValue={selectedLanguage}
                                        onValueChange={(itemValue, itemIndex) =>
                                            setSelectedLanguage(itemValue)
                                        }>
                                        <Picker.Item label={t("editProfile.select")} value="select" />
                                        <Picker.Item label={t("editProfile.12th")} value="12th" />
                                        <Picker.Item label={t("editProfile.10th")} value="10th" />
                                        <Picker.Item label={t("editProfile.b.tech")} value="b.tech" />
                                        <Picker.Item label={t("editProfile.b.com")} value="b.com" />
                                    </Picker>

                                </View>
                            </View>

                        </View>


                    </ScrollView>
                </View>

            </ImageBackground>
        </View>
    )
}

export default EditProfile

