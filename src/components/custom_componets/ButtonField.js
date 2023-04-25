import {StyleSheet, Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../login/util';

const ButtonField = ({
  loginBtnText,
  googleImage,
  bgColor,
  fontWeight,
  color,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: bgColor}, {...rest}]}
      {...rest}>
      {googleImage && (
        <Image
          style={styles.image_google_style}
          source={require('../../Images/google.png')}
        />
      )}
      <Text style={[styles.txtStyle, {color: color}]}>{loginBtnText}</Text>
    </TouchableOpacity>
  );
};

export default ButtonField;

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
    fontSize: 16,
    fontFamily: colors.Regularj,
    // fontWeight: 'bold'
    fontWeight: '700',
  },
  image_google_style: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
  },
});
