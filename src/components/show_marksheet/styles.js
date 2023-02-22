import { StyleSheet, Text, View } from 'react-native'
import { globalfonts } from '../../globalUtils/globalutil';

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    bg_img_style: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
    },
    main_view: {
        flex: 1,
        padding: 15
    },
    school_name_text_style: {
        fontSize: 15,
        color: '#000',
        fontFamily: globalfonts.Regularm,
        width: '85%',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    board_name_text_style: {
        fontSize: 14,
        color: '#3A3A3A',
        fontFamily: globalfonts.Regularm,
        width: '85%',
        marginBottom: 5,

    },
    key_text_text_style: {
        fontSize: 15,
        color: '#3A3A3A',
        fontFamily: globalfonts.Regularm,
        width: '85%',
        marginBottom: 5,

    },
    marksheet_view: {
        marginTop: 50,
        height: 430,
        overflow: 'scroll'

    },
    zoom_top_container: {
        marginTop: 22,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginBottom: 10
    },
    bottom_view: {
        borderTopWidth: 1,
        borderColor: '#6f0808',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255, 255, 255, 0.494)',
        paddingBottom: 8
    },
    modal_view: {
        position: 'absolute',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 5,
        right: 25,
        top: 60
    },
    modal_text_style: {
        fontSize: 13,
        color: '#000',

    }

})