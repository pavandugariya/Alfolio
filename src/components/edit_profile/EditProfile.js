import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, TouchableOpacity, Alert, Platform } from 'react-native'
import React, { useState } from 'react'
import { globalcolors, globalfonts, globalStyle } from '../../globalUtils/globalutil'
import CustomHeader from '../custom_componets/CustomHeader'
import { useNavigation } from '@react-navigation/native';
import CustomInputField from '../custom_componets/CustomInputField';
import { Picker, } from '@react-native-picker/picker';
import { styles } from '../edit_profile/styles';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker';

const EditProfile = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const [userImage, setuserImage] = useState("https://cdn-icons-png.flaticon.com/512/147/147144.png")
    const [selectedLanguage, setSelectedLanguage] = useState();
    const imagePickerHandler = async () => {
        try {

            await ImagePicker.openPicker({
                width: 100,
                height: 100,
                cropping: true,
            }).then(image => {
                console.log(image.path);
                setuserImage(image.path);
            });
        } catch (error) {
            console.log('No select');
        }
    }
    const imagePickerCameraHandler = async () => {
        try {

            await ImagePicker.openCamera({
                width: 100,
                height: 100,
                cropping: true,
                cropperToolbarTitle: 'AlFolio',
                useFrontCamera: true,
            }).then(image => {
                console.log(image.path);
                setuserImage(image.path);
            });
        } catch (error) {
            console.log('No select');
        }
    }
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
                            source={{ uri: userImage }}
                            style={{
                                height: '100%', width: '100%',
                                borderWidth: 2,
                                borderRadius: 80,
                            }}
                            // style={styles.img_container}
                            resizeMode={'contain'}
                        />
                        <TouchableOpacity style={styles.edit_image_icon_box}
                            onPress={() => {
                                Alert.alert('Upload Photo', 'Choose Your Profile Picture',
                                    [
                                        { text: 'Cancel', onPress: () => console.log('OK Pressed') },
                                        {
                                            text: 'Open Gallary',
                                            onPress: () => imagePickerHandler(),
                                            style: 'destructive',
                                        },
                                        { text: 'Open  Camera', onPress: () => imagePickerCameraHandler() },

                                    ],
                                    {
                                        cancelable: true,
                                        onDismiss: () =>
                                            Alert.alert(
                                                'This alert was dismissed by tapping outside of the alert dialog.',
                                            ),
                                    },
                                );

                                // alert('')
                                // imagePickerHandler()
                            }

                            }
                        >
                            <Icon name={'camera-reverse-outline'} size={14} color={globalcolors.icon_color} />
                        </TouchableOpacity>
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
                                placeholderText={t('editProfile.enter your email')}
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
                                            marginTop: -10,
                                            color: '#000'
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

