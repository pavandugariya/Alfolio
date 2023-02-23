import {
    StyleSheet, Text, View, ImageBackground, Image,
    TouchableOpacity, Dimensions, ScrollView
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { styles } from "../home/styles";
import { globalshedow as shedow } from '../../globalUtils/globalutil';

const { height, width } = Dimensions.get('screen')
const Home = () => {
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
                <Image
                    source={require('../../Images/home_alfolio_logo.png')}
                    style={{
                        height: 40,
                        width: '60%',
                        alignSelf: 'center',
                        marginBottom: 10
                    }} resizeMode={'contain'}
                />
                <ScrollView>
                    <View style={styles.item_top_box}>
                        {
                            Array(10).fill('1').map((_, index) => {
                                return (
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('ShowMarksheet')}
                                        key={index} style={[styles.item_box, shedow]}>
                                        <Icon name={'document-outline'} size={45} color={'#494848'}
                                            alignSelf={'center'}
                                        />
                                        <Text numberOfLines={1}
                                            style={styles.item_top_text_style}>High secondary</Text>
                                        <Text numberOfLines={1}
                                            style={styles.item_bottom_text_style}>MP BOARD</Text>
                                        <Image
                                            source={require('../../Images/verified.png')}
                                            style={{ height: 30, width: 30, alignSelf: 'center', marginTop: 5 }}
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
