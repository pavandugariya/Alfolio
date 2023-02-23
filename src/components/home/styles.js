import { StyleSheet, Dimensions } from 'react-native'
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
        marginHorizontal: 30,
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
        marginVertical: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: '#fff',

    },
    item_top_text_style: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 15,
        color: '#353434',
        fontWeight: 'bold',
        fontFamily: homecolors.Regularj
    },
    item_bottom_text_style: {
        alignSelf: 'center',
        marginTop: 5,
        fontSize: 15,
        color: '#686868',
        fontFamily: homecolors.Regularj
    }
})