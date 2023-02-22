import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { globalcolors, globalfonts } from '../../globalUtils/globalutil';

const CustomHeader = ({ left_icon, right_icon, header_name, header_logo, leftOnpress, rightOnpress }) => {
    return (
        <View style={styles.container}>
            {
                left_icon &&
                <TouchableOpacity
                    onPress={leftOnpress}
                    style={styles.icon_style}>
                    <Icon name={left_icon} size={24} color={globalcolors.icon_color} />
                </TouchableOpacity>
            }
            {
                header_name &&
                <Text style={styles.header_name_style}>{header_name} </Text>
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
                    <Icon name={right_icon} size={24} color={globalcolors.icon_color} />
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
        left: 15
    },
    second_icon_style: {
        position: 'absolute',
        right: 15
    },
    header_name_style: {
        fontSize: 20,
        color: '#000',
        lineHeight: 23,
        fontFamily: globalfonts.Regularm

    }
})