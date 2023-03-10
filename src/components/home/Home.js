import {
    StyleSheet, Text, View, ImageBackground, Image,
    TouchableOpacity, Dimensions, ScrollView
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import { styles } from "../home/styles";
import { globalshedow as shedow } from '../../globalUtils/globalutil';
import { useTranslation } from 'react-i18next';

const { height, width } = Dimensions.get('screen')
const Home = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const toggleHandler = () => {
        navigation.openDrawer();
    }
    return (
        <ImageBackground
            source={require('../../Images/home_bg2.png')}
            style={styles.container}
        >
            <TouchableOpacity
                onPress={toggleHandler}
                style={styles.top_icon_box}>
                <Icon name={'reorder-three-outline'} size={35} color={'#000'} />
            </TouchableOpacity>
            <View style={styles.main_view}>
                <View style={styles.your_text_box_style}>
                    <Text style={styles.your_txt_style}>{t('home.your')}</Text>
                    <Image
                        source={require('../../Images/logo_name.png')}
                        style={{
                            height: 35,
                            width: 145,
                        }} resizeMode={'contain'}
                    />
                </View>
                <ScrollView>
                    <View style={styles.item_top_box}>
                        {
                            Array(10).fill('1').map((_, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('ShowMarksheet')}
                                        key={index} style={[styles.item_box, shedow]}>
                                        <Icon name={'document-text-outline'} size={45} color={'#951516'}
                                            alignSelf={'center'}
                                        />
                                        <Text numberOfLines={1}
                                            style={styles.item_top_text_style}>{t('home.high secondary')}</Text>
                                        <Text numberOfLines={1}
                                            style={styles.item_bottom_text_style}>{t('home.mp board')}</Text>
                                        <Icons name={'verified'} size={30}
                                            color={'#951516'}
                                            alignSelf={'center'}
                                            marginTop={5}
                                        />
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

export default Home
