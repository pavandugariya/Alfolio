import {StyleSheet} from 'react-native';
export const globalcolors = {
  icon_color: '#951516',
  text_color: '#951516',
  tintColor: 'tintColor',
};
export const globalfonts = {
  Regularm: 'Montserrat-Regular',
  Regularj: 'Jeko Regular',
  Medium_m: 'Montserrat-Medium',
  Bold_m: 'Montserrat-Bold',
  ExtraBold_m: 'Montserrat-ExtraBold',
  Bold_j: 'Jeko Bold',
  Extra_Bold_j: 'Jeko Extra Bold',
};
export const globalshedow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,

  elevation: 2,
};
export const globalStyle = StyleSheet.create({
  bg_image_style: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
});
