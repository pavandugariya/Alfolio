import { StyleSheet, Text, View, Image, ImageBackground, Dimensions, TouchableOpacity, ScrollView, Modal, Alert } from 'react-native'
import React, { useState } from 'react'
import { colors } from './util'
import { globalfonts, globalshedow } from '../../globalUtils/globalutil';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/types';
const { height, width } = Dimensions.get('screen')

const PickAccount = () => {
    const { t } = useTranslation();

    type PickAccountProps = StackNavigationProp<RootStackParamList, 'Drawer'>;
    const navigation = useNavigation<PickAccountProps>();
    const [modalVisible, setModalVisible] = useState(false);
    const clickHandler = () => {
        navigation.navigate('Drawer')
    }

    const RemoveModal = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modal_top_box}>
                    <View style={[styles.modal_main_box, globalshedow]}>
                        <Icon name={'trash'} color={'#951516'} size={30}
                            style={{ alignSelf: 'center' }} />
                        <Text style={styles.modal_top_text_style}>Do You Want to Remove This Account </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity style={styles.btn_box}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={{ fontSize: 15, color: '#000', fontFamily: globalfonts.Regularj, }}>No</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                                style={styles.btn_box}>
                                <Text style={{ fontSize: 15, color: '#000', fontFamily: globalfonts.Regularj, }}>Yes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
    return (
        <ImageBackground
            source={require('../../Images/loginformbg.png')}
            style={styles.container}>
            <View style={styles.logo_top_box}>
                <Image
                    source={require('../../Images/logo_name.png')}
                    style={{
                        height: 60,
                        width: '68%',

                    }}
                />
            </View>
            <View style={[styles.bottom_view_style, globalshedow]}>

                <ScrollView>
                    <View style={{ alignItems: 'center', }}>
                        <Text style={styles.txt_title_style}>{t('pickAccount.title')}</Text>

                        <TouchableOpacity style={styles.top_text_container}
                            onPress={clickHandler}
                        >
                            <Icon name={'person-outline'} size={20} color={'#757171'} />
                            <Text numberOfLines={1} style={styles.text_style_email}>Vikrant.mongoose@gmail.com</Text>
                            <TouchableOpacity style={{ paddingHorizontal: 10 }}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Icon name={'ellipsis-vertical-outline'} size={20} color={'#757171'} />
                                <RemoveModal />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.top_text_container} >
                            <Icon name={'person-outline'} size={20} color={'#757171'} />
                            <Text numberOfLines={1} style={styles.text_style_email}>Krishnapal.mongoose@gmail.com</Text>
                            <TouchableOpacity style={{ paddingHorizontal: 10 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name={'ellipsis-vertical-outline'} size={20} color={'#757171'} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.top_text_container}                     >
                            <Icon name={'person-outline'} size={20} color={'#757171'} />
                            <Text numberOfLines={1} style={styles.text_style_email}>Pawan.mongoose@gmail.com</Text>
                            <TouchableOpacity style={{ paddingHorizontal: 10 }}
                                onPress={() => setModalVisible(!modalVisible)}>
                                <Icon name={'ellipsis-vertical-outline'} size={20} color={'#757171'} />
                            </TouchableOpacity>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.top_text_container, { justifyContent: 'flex-start' }]}>
                            <Icon name={'add-outline'} size={20} color={'#757171'} />
                            <Text numberOfLines={1} style={[styles.text_style_email, { left: 12 }]}>{t('pickAccount.use another account')}</Text>

                        </TouchableOpacity>

                    </View>

                </ScrollView>

            </View>
        </ImageBackground>
    )
}

export default PickAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null!,
        height: null!,
        resizeMode: 'contain',

    },
    logo_top_box: {
        width: width,
        height: height * 0.23,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    bottom_view_style: {
        width: width * 0.95,
        backgroundColor: '#fff',
        position: 'relative',
        bottom: 0,
        borderTopEndRadius: 20,
        borderTopLeftRadius: 20,
        borderRadius: 20,
        paddingHorizontal: 40,
        paddingVertical: 40,
        top: 100,
        alignSelf: 'center'

    },
    txt_title_style: {
        color: colors.txt_color,
        fontSize: 20,
        fontFamily: colors.Regularj,
        marginBottom: 10,
    },
    text_input_style: {
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        fontSize: 15,
        width: '12%',
        marginLeft: 8,
        alignItems: 'center'
    },
    top_text_container: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 0,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        flexDirection: 'row'

    },
    text_style_email: {
        width: '70%',
        color: '#757171',
        fontFamily: colors.Regularj

    },
    modal_top_box: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal_main_box: {
        width: '80%',
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,

    },
    modal_top_text_style:
    {
        alignSelf: 'center',
        fontSize: 16,
        color: '#000',
        marginVertical: 20
    },
    btn_box: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#ebc6c625',
        borderRadius: 10,
        globalshedow
    }
})