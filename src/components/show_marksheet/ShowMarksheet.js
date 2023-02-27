import { Alert, ImageBackground, Modal, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { styles } from './styles';
import CustomHeader from '../custom_componets/CustomHeader';
import { useNavigation } from '@react-navigation/native';
import GradientBtn from '../custom_componets/GradientBtn';
import { useTranslation } from 'react-i18next';
import Pinchable from 'react-native-pinchable';


const ShowMarksheet = () => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const [modalVisible, setModalVisible] = useState(false);

    const sendHandler = () => {
        navigation.navigate('SendDocuments')
    }
    const sendHistoryHandler = () => {
        navigation.navigate('SendHistory')
        setModalVisible(!modalVisible)
    }
    const shareHandler = () => { }
    const downloadHandler = () => { }

    const Modalcomponent = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <TouchableOpacity style={{
                    flex: 1,
                    backgroundColor: '#b4a4a400'
                }}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={sendHistoryHandler}
                    style={styles.modal_view}>
                    <Text style={styles.modal_text_style}>{t('showMarksheet.send history log')}</Text>
                </TouchableOpacity>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../Images/dashboard_bg.png')}
                style={styles.bg_img_style}
            >
                <CustomHeader
                    left_icon={'chevron-back'}
                    right_icon={'ellipsis-vertical'}
                    header_logo
                    // header_name={'Your Doc'}
                    leftOnpress={() => navigation.goBack()}
                    rightOnpress={() => { setModalVisible(!modalVisible) }}
                />
                <Modalcomponent />

                <View style={styles.main_view}>
                    <Text style={styles.school_name_text_style}>{t('showMarksheet.school')}</Text>
                    <Text style={styles.board_name_text_style}>{t('showMarksheet.board')}</Text>
                    <Text style={styles.key_text_text_style}>oxfd.................ea</Text>
                    <Pinchable >
                        <View style={styles.marksheet_view}>
                            <Image
                                source={require('../../Images/marksheet.png')}
                                // source={{ uri: 'https://img.freepik.com/free-psd/professional-award-certificate-template-psd-green-abstract-design_53876-123367.jpg?w=740&t=st=1677074101~exp=1677074701~hmac=d57a280244bb0a8ecb318dacf68349aba8543f30cdb0e2539028ae6778f6ff6a' }}
                                style={{
                                    flex: 1,
                                    width: null,
                                    height: null,
                                    resizeMode: 'contain',

                                }}
                            />
                        </View>
                    </Pinchable>
                </View>
                <View style={styles.bottom_view}>
                    <GradientBtn
                        loginBtnText={t('showMarksheet.send')}
                        bgColor={'#95151500'}
                        bgColor2={'#d84a2300'}
                        color={'#a41616'}
                        marginTop={20}
                        height={40}
                        borderRadius={5}
                        icon_color={'#951516'}
                        icon_size={22}
                        width={100}
                        icon_name={'send'}
                        onPress={sendHandler}

                    />
                    <GradientBtn
                        loginBtnText={t('showMarksheet.share')}
                        bgColor={'#951516'}
                        bgColor2={'#D84B23'}
                        color={'#ffffff'}
                        marginTop={20}
                        height={40}
                        borderRadius={5}
                        icon_color={'#ffffff'}
                        icon_size={22}
                        width={100}
                        icon_name={'share-social'}
                    // onPress={otpVerification}
                    />
                    <GradientBtn
                        loginBtnText={t('showMarksheet.download')}
                        bgColor={'#95151500'}
                        bgColor2={'#d84a2300'}
                        color={'#951516'}
                        marginTop={20}
                        height={40}
                        borderRadius={5}
                        icon_color={'#951516'}
                        icon_size={22}
                        width={100}
                        icon_name={'download'}
                    // onPress={otpVerification}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default ShowMarksheet
