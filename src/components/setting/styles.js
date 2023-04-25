import {StyleSheet} from 'react-native';
import {globalfonts, globalStyle} from '../../globalUtils/globalutil';
import {settingsutils} from './settingsutils';
export const styles = StyleSheet.create({
  top_container: {
    marginTop: 40,
    alignSelf: 'center',
    width: '85%',
  },
  bottom_top_inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: '#ffffffa0',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  bottom_inner_container: {
    marginBottom: 15,
    backgroundColor: '#ffffffa0',
    borderRadius: 5,
    paddingVertical: 5,
    paddingLeft: 35,
  },
  bottom_name_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name_text_style: {
    color: settingsutils.icon_color,
    fontSize: settingsutils.font_size,
    fontFamily: globalfonts.Regularj,
    paddingLeft: 20,
  },
  language_btn_box_style: {
    position: 'absolute',
    left: 15,
    top: 15,
  },
  circle_style: {
    height: 180,
    width: 250,
    backgroundColor: '#d7e7fec9',
    position: 'absolute',
    zIndex: -50,
    borderRadius: 100,
    right: -20,
  },
  top_icon_box: {
    position: 'absolute',
    left: 10,
    top: 10,
    // backgroundColor: homecolors.toggle_bg_color,
    borderRadius: 7,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
