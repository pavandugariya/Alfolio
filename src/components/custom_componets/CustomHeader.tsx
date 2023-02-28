import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { globalcolors, globalfonts } from '../../globalUtils/globalutil';
import { useNavigation } from '@react-navigation/native';

interface IcustomHeader {
    left_icon?: string,
    right_icon?: string,
    header_name?: string,
    header_logo?: string,
    leftOnpress?: string,
    rightOnpress?: string
}

const CustomHeader = ({ left_icon, right_icon, header_name, header_logo, leftOnpress, rightOnpress }: IcustomHeader) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            {
                left_icon &&
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.icon_style}>
                    <Icon name={left_icon} size={25} color={globalcolors.icon_color} />
                </TouchableOpacity>
            }
            {
                header_name &&
                <Text numberOfLines={1} style={styles.header_name_style}>{header_name} </Text>
            }
            {
                header_logo &&
                <Image
                    source={require('../../Images/logo_name.png')}
                    style={{ height: 25, width: 87 }}
                />
            }
            {
                right_icon &&
                <TouchableOpacity
                    onPress={rightOnpress}
                    style={styles.second_icon_style}>
                    <Icon name={right_icon} size={25} color={globalcolors.icon_color} />
                </TouchableOpacity>
            }
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon_style: {
        position: 'absolute',
        left: 15,
        // borderWidth: 1,
        // padding: 20
    },
    second_icon_style: {
        position: 'absolute',
        right: 15
    },
    header_name_style: {
        letterSpacing: 1,
        fontSize: 20,
        color: '#000',
        // lineHeight: 23,
        fontFamily: globalfonts.Extra_Bold_j,
        // fontWeight: 'bold'

    }
})