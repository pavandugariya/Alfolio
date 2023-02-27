import { StyleSheet, Dimensions } from 'react-native'
import { globalcolors, globalfonts } from '../../globalUtils/globalutil';
const { height, width } = Dimensions.get('screen')
import { homecolors, shedow } from './util';

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
        alignItems: 'center'

    },
    main_view: {
        flex: 1,
        marginTop: 90,
        // paddingBottom: 10
    },
    item_top_box: {
        flex: 1,
        marginHorizontal: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        display: 'flex',
        flexWrap: 'wrap',
        top: 10,
        paddingBottom: 30
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
        flexDirection: "row",
        alignSelf: 'center',
        marginBottom: 20,
    },
    your_txt_style: {
        fontSize: 30,
        color: globalcolors.text_color,
        fontFamily: globalfonts.Extra_Bold_j,
        marginRight: -15
    }
})