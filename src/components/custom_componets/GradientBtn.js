import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons'


const GradientBtn = ({ loginBtnText, bgColor, bgColor2,
    icon_name, icon_color, icon_size,
    color, ...rest }) => {
    return (
        <TouchableOpacity {...rest} >
            <LinearGradient
                style={[styles.container, { backgroundColor: bgColor }, { ...rest }]} {...rest}
                colors={[bgColor, bgColor2]}
                start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                locations={[0.0, 0.6]}
            >
                {icon_name && <Icon name={icon_name} size={icon_size} color={icon_color} style={{ marginRight: 8 }} />}

                <Text style={[styles.txtStyle, { color: color }]}>{loginBtnText}</Text>

            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GradientBtn

const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 20,
        height: 40,
        borderRadius: 10,
        marginVertical: 10,
        flexDirection: 'row',
        paddingHorizontal: 8

    },
    txtStyle: {
        fontSize: 16,
        // fontFamily: colors.Regularj,
        // fontWeight: 'bold'


    }
})