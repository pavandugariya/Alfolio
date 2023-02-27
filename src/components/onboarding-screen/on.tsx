import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { first } from "./first";
const On = () => {
    let name = 20;
    const arr: number[] = [10_000_00, 2, 3, 4, 4]
    // console.log(arr.forEach(m => m.toString));
    // console.log(arr.length);
    // console.log(arr);
    const obj1 = new first();
    obj1.setName('Janak from bihar')
    console.log(obj1.getName());
    // console.log(obj1.getName());
    return (
        <View>
            <Text>on</Text>
        </View>
    )
}

export default On

const styles = StyleSheet.create({})