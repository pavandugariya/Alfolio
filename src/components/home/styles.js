import { StyleSheet, Dimensions } from 'react-native';
import { globalcolors, globalfonts } from '../../globalUtils/globalutil';
const { height, width } = Dimensions.get('screen');
import { homecolors, shedow } from './util';
import { Customcolor } from '../../Utility/Customcolor';
import { horizScale, vertScale } from '../../Utility/Layout';
import { fontSize } from '../../Utility/Fontsize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  top_icon_box: {
    position: 'absolute',
    left: 20,
    top: 20,
    backgroundColor: homecolors.toggle_bg_color,
    borderRadius: 7,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_view: {
    flex: 1,
    marginTop: 90,
    // paddingBottom: 10
  },
  item_top_box: {
    flex: 1,
    marginHorizontal: 35,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    // display: 'flex',
    // flexWrap: 'wrap',
    top: 10,
    paddingBottom: 30,
  },
  item_box: {
    height: 160,
    width: width * 0.37,
    marginVertical: 15,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  item_top_text_style: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 15,
    color: '#353434',
    fontFamily: globalfonts.Extra_Bold_j,
  },
  item_bottom_text_style: {
    alignSelf: 'center',
    marginTop: 5,
    fontSize: 15,
    color: '#686868',
    fontFamily: globalfonts.Regularj,
  },
  your_text_box_style: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  your_txt_style: {
    fontSize: 30,
    color: globalcolors.text_color,
    fontFamily: globalfonts.Extra_Bold_j,
    marginRight: -15,
  },
  bottom_view_style: {
    width: width * 0.85,
    backgroundColor: Customcolor.white,
    position: 'relative',
    bottom: 0,
    borderTopEndRadius: vertScale(20),
    borderTopLeftRadius: vertScale(20),
    borderRadius: 20,
    paddingHorizontal: horizScale(30),
    paddingVertical: vertScale(25),
    opacity: 0.8,
    alignSelf: 'center',
  },
  heading_text_style: {
    fontFamily: 'Jeko DEMO',
    fontWeight: 700,
    fontSize: fontSize.h5,
    alignSelf: 'center',
    color: Customcolor.textcolor,
  },
  subheading_text_style: {
    fontFamily: 'Jeko DEMO',
    fontWeight: 700,
    fontSize: fontSize.reqular,
    alignSelf: 'center',
    color: Customcolor.black,
    marginVertical: vertScale(20),
  },

  top_icon_box: {
    backgroundColor: Customcolor.white,
    borderRadius: 8,
    width: horizScale(40),
    height: vertScale(40),
    left: horizScale(20),
    top: vertScale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo_heading_Text_style: {
    fontFamily: '',
    fontWeight: '700',
    fontSize: fontSize.h1,
    color: Customcolor.textcolor,
    marginRight: horizScale(10),
  },
  text_input_style: {
    alignSelf: 'center',
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 20,
  }
});
