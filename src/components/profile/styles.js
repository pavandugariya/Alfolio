import {StyleSheet} from 'react-native';
import {globalfonts, globalStyle} from '../../globalUtils/globalutil';
import {homecolors} from '../home/util';
import {profileutils} from './utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img_box_top_container: {
    marginTop: 50,
    // padding: 25,
    alignSelf: 'center',
    width: '85%',
    flexDirection: 'row',
  },
  img_container: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderRadius: 80,
    borderColor: '#951516',
  },
  name_top_container: {
    flex: 1,
    paddingLeft: 25,
    justifyContent: 'center',
  },
  name_txt_style: {
    fontSize: 18,
    fontFamily: globalfonts.Bold_j,
    marginBottom: 5,
    color: '#000',
  },
  email_txt_style: {
    fontSize: 16,
    fontFamily: globalfonts.Regularm,
    marginBottom: 5,
    color: '#000',
  },
  bottom_top_container: {
    marginTop: 50,
    alignSelf: 'center',
    width: '85%',
  },
  bottom_top_inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
    backgroundColor: '#fdfdfd6d',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  bottom_name_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name_text_style: {
    color: profileutils.icon_color,
    fontSize: profileutils.font_size,
    fontFamily: globalfonts.Regularj,
    paddingLeft: 20,
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
