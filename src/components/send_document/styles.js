
import { StyleSheet } from 'react-native'
import { globalcolors, globalfonts, globalStyle } from '../../globalUtils/globalutil'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    top_container: {
        width: '85%',
        borderRadius: 8,
        backgroundColor: 'rgba(255, 255, 255, 0.652)',
        marginTop: 180,
        alignSelf: 'center',
        padding: 25,
    },
    text_input_top_container: {
        marginTop: 20
    },
    text_input_style: {
        borderWidth: 1,
        borderColor: globalcolors.text_color,
        height: 40,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 5,
        paddingHorizontal: 10,
        color: '#000',
        fontSize: 15,
        backgroundColor: '#ffffffb5',
        margin: 1,
    },
    icon_box_text_input: {
        position: 'absolute',
        right: 10,
        bottom: 8
    },
    bottom_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center'
    },
    chech_box_top_container: {
        paddingLeft: 8
    },
    text_inpute_top_text_style: {
        fontSize: 12,
        color: globalcolors.icon_color,
        fontFamily: globalfonts.Regularm,
    },
    bottom_text_style: {
        fontSize: 16,
        color: globalcolors.icon_color,
        fontFamily: globalfonts.Regularm,
        fontWeight: 'bold'
    }

})