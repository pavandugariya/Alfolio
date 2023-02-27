import { StyleSheet } from 'react-native'
import { globalfonts, globalStyle } from '../../globalUtils/globalutil'
import { editprofileutils } from './utils';
export const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    top_box_style: {
        width: '85%',
        alignSelf: 'center',
        marginTop: 85,
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff89',
    },
    img_container: {
        width: 80,
        height: 80,
        borderWidth: 2,
        borderRadius: 80,
        borderColor: '#951516',
        position: 'absolute',
        top: -50,
        alignSelf: 'center'
    },
    top_text_box: {
        marginVertical: 30
    },

    top_text_style: {
        fontSize: editprofileutils.font_size,
        color: editprofileutils.font_color
    },
    text_input_top_container: {
        paddingBottom: 150,
        flex: 1,
    },
    studies_top_container: {
        marginVertical: 10,
    },
    text_style: {
        fontFamily: globalfonts.Regularj,
        fontSize: 15,
        fontWeight: '600',
        color: '#951516',
        marginBottom: 5
    }


})