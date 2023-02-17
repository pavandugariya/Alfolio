import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../login/util'

const ButtonField = ({ loginBtnText, bgColor, color, ...rest }) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: bgColor }, { ...rest }]} {...rest} >
            <Text style={[styles.txtStyle, { color: color }]}>{loginBtnText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonField

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        // marginHorizontal: 20,
        height: 40,
        borderRadius: 10,
        marginVertical: 10,

    },
    txtStyle: {
        fontSize: 18,
        fontFamily: colors.Regularj,
        // fontWeight: 'bold'


    }
})