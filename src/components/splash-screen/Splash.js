import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { _set_time_out } from './action'

const Splash = () => {
    useEffect(() => {
        _set_time_out();
    }, [])

    return (
        <View style={styles.container}>
            <Text>Splash</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})