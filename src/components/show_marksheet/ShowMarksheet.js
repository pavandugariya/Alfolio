import {
  Alert,
  ImageBackground,
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';
import CustomHeader from '../custom_componets/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import GradientBtn from '../custom_componets/GradientBtn';
import {useTranslation} from 'react-i18next';
import Pinchable from 'react-native-pinchable';
import RNFetchBlob from 'rn-fetch-blob';
import Share from 'react-native-share';

const ShowMarksheet = () => {
  const navigation = useNavigation();
  const {t} = useTranslation();
  const [modalVisible, setModalVisible] = useState(false);

  // const image_path =
  const sendHandler = () => {
    navigation.navigate('SendDocuments');
  };
  const sendHistoryHandler = () => {
    navigation.navigate('SendHistory');
    setModalVisible(!modalVisible);
  };
  const shareHandler = async () => {
    const options = {
      message: 'This is show marksheet link.',
      url: 'https://instamobile.io/app-templates/react-native-ecommerce-app-template/ ',
      email: 'gagan.mongoosetech@gmail.com',
      subject: 'Share marksheet',
      recipient: '919165410012',
    };
    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const downloadFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to memory to download the file ',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        actualDownload();
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
      }
    } catch (err) {
      console.log('response', err);
    }
  };

  const actualDownload = () => {
    // setLoading(true);
    let dirs = RNFetchBlob.fs.dirs;
    let PictureDir = RNFetchBlob.fs.dirs.PictureDir;
    let date = new Date();

    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
      addAndroidDownloads: {
        // Related to the Android only
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          '.png',
        description: 'Image',
      },
    })
      .fetch(
        'GET',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMn_m69iVS810LCA2E2H6z1tm3jw8fk7dKqgQx13rKwmCajAj',
        {},
      )
      .then(res => {
        // setLoading(false);
        ToastAndroid.showWithGravity(
          'Your file has been downloaded to downloads folder!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      });
  };
  const Modalcomponent = () => {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#b4a4a400',
          }}
          onPress={() => setModalVisible(!modalVisible)}></TouchableOpacity>
        <TouchableOpacity
          onPress={sendHistoryHandler}
          style={styles.modal_view}>
          <Text style={styles.modal_text_style}>
            {t('showMarksheet.send history log')}
          </Text>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/dashboard_bg.png')}
        style={styles.bg_img_style}>
        <CustomHeader
          left_icon={'chevron-back'}
          right_icon={'ellipsis-vertical'}
          header_logo
          // header_name={'Your Doc'}
          leftOnpress={() => navigation.goBack()}
          rightOnpress={() => {
            setModalVisible(!modalVisible);
          }}
        />
        <Modalcomponent />

        <View style={styles.main_view}>
          <Text style={styles.school_name_text_style}>
            {t('showMarksheet.school')}
          </Text>
          <Text style={styles.board_name_text_style}>
            {t('showMarksheet.board')}
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.key_text_text_style}>0xfd........ea!</Text>
          </TouchableOpacity>
          <Pinchable>
            <View style={styles.marksheet_view}>
              <Image
                onPress={() => {}}
                // source={require('../../Images/marksheet.png')}
                // source={{uri: image_path}}
                source={{
                  uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpMn_m69iVS810LCA2E2H6z1tm3jw8fk7dKqgQx13rKwmCajAj',
                }}
                style={{
                  flex: 1,
                  width: null,
                  height: null,
                  resizeMode: 'contain',
                }}
              />
            </View>
          </Pinchable>
        </View>
        <View style={styles.bottom_view}>
          <GradientBtn
            loginBtnText={t('showMarksheet.send')}
            bgColor={'#95151500'}
            bgColor2={'#d84a2300'}
            color={'#a41616'}
            marginTop={20}
            height={40}
            borderRadius={5}
            icon_color={'#951516'}
            icon_size={22}
            width={100}
            icon_name={'send'}
            onPress={sendHandler}
          />
          <GradientBtn
            loginBtnText={t('showMarksheet.share')}
            bgColor={'#951516'}
            bgColor2={'#D84B23'}
            color={'#ffffff'}
            marginTop={20}
            height={40}
            borderRadius={5}
            icon_color={'#ffffff'}
            icon_size={22}
            width={100}
            icon_name={'share-social'}
            // onPress={otpVerification}
            onPress={() => {
              shareHandler();
            }}
          />
          <GradientBtn
            loginBtnText={t('showMarksheet.download')}
            bgColor={'#95151500'}
            bgColor2={'#d84a2300'}
            color={'#951516'}
            marginTop={20}
            height={40}
            borderRadius={5}
            icon_color={'#951516'}
            icon_size={22}
            width={100}
            icon_name={'download'}
            // onPress={otpVerification}
            onPress={() => {
              downloadFile();
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default ShowMarksheet;
