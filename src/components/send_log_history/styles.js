import {StyleSheet} from 'react-native';
import {
  globalcolors,
  globalfonts,
  globalStyle,
} from '../../globalUtils/globalutil';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top_conatiner: {
    width: '85%',
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.772)',
    marginTop: 10,
    alignSelf: 'center',
    padding: 25,
    marginVertical: 20,
  },
  top_inner_container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  time_container: {
    position: 'absolute',
    right: 25,
    top: 25,
  },
  name_style: {
    fontSize: 16,
    fontFamily: globalfonts.Medium_m,
    color: globalcolors.text_color,
    marginBottom: 5,
  },
  school_style: {
    fontSize: 16,
    fontFamily: globalfonts.Medium_m,
    color: '#000',
    marginBottom: 5,
  },
  board_style: {
    color: '#737373',
    fontSize: 14,
  },
  bottom_text_style: {
    fontSize: 12,
    color: '#000',
  },
  today_btn_style: {
    borderRadius: 8,
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 3,
  },
  main_view_style: {
    flex: 1,
    paddingTop: 30,
  },
});
