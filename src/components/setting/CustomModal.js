import { StyleSheet, Text, View, Modal } from 'react-native'
import React, { useState } from 'react'

const CustomModal = () => {
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.container}>
                <View style={styles.top_box}>
                    <Text>Hindi</Text>
                    <Text>English</Text>
                    <Text>Japani</Text>
                </View>
            </View>
        </Modal>
    )
}

export default CustomModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    top_box: {
        backgroundColor: '#fff5e9',
        alignSelf: 'center',
        paddingHorizontal: 25,
        paddingVertical: 25,
        borderRadius: 10,
        width: '85%',
    }
})