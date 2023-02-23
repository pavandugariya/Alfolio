import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { globalfonts, globalStyle } from '../../globalUtils/globalutil'
import CustomHeader from '../custom_componets/CustomHeader'
import GradientBtn from '../custom_componets/GradientBtn'

const Profile = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../Images/profile_bg.png')}
                style={globalStyle.bg_image_style}
            >
                <CustomHeader
                    header_name={'Profile'}
                    left_icon={'chevron-back'}
                // leftOnpress={() => navigation.goBack()}
                />
                <View style={styles.img_box_top_container}>
                    <View style={styles.img_container}>
                        <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/147/147144.png" }}
                            // style={{ height: '100%', width: '100%' }}
                            style={styles.img_container}
                            resizeMode={'contain'}
                        />

                    </View>
                    <View style={styles.name_top_container}>
                        <Text numberOfLines={1} style={styles.name_txt_style}>Pavan Dugariya</Text>
                        <Text numberOfLines={1} style={styles.email_txt_style}>pavan.mongoosetech@gmail.com</Text>
                        <GradientBtn
                            loginBtnText={'Edit Profile'}
                            bgColor2={'#D84B23'}
                            bgColor={'#951516'}
                            color={'#ffffff'}
                            marginTop={17}
                            height={30}
                            borderRadius={5}
                            width={107}
                        // paddingHorizontal={20}
                        />
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img_box_top_container: {
        marginTop: 50,
        // padding: 25,
        alignSelf: 'center',
        width: '85%',
        flexDirection: 'row'
    },
    img_container: {
        width: 107,
        height: 107,
        borderWidth: 1,
        borderRadius: 107,
        borderColor: '#fff'
    },
    name_top_container: {
        flex: 1,
        paddingLeft: 25,
        justifyContent: 'center'
    },
    name_txt_style: {
        fontSize: 15,
        fontFamily: globalfonts.Bold_m,
        marginBottom: 5,
        color: '#000'
    },
    email_txt_style: {
        fontSize: 11,
        fontFamily: globalfonts.Regularm,
        marginBottom: 5,
        color: '#000'

    }
})