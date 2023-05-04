import {
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Share,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
// import QRCode from 'react-native-qrcode-svg';
import RNFetchBlob from 'rn-fetch-blob';

const ScanQRCode = () => {
  const [QRvalue, setQRValue] = useState('');
  const [QRLogo, setQRLogo] = useState('');
  const [QRImage, setQRImage] = useState('');
  const [QRTextValue, setQRTextValue] = useState('');

  const GenerateQR = () => {
    ref.current.toDataURL(data => {
      setQRImage('data:image/png;base64,' + data);
    });
  };

  const handleSave = async () => {
    if (Platform.OS === 'android') {
      var isReadGranted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
    }
    if (isReadGranted === PermissionsAndroid.RESULTS.GRANTED) {
      const dirs = RNFetchBlob.fs.dirs;
      var qrcode_data = QRImage.split('data:image/png;base64,');
      const filePath =
        dirs.DownloadDir + '/' + 'QRCode' + new Date().getSeconds() + '.png';
      RNFetchBlob.fs
        .writeFile(filePath, qrcode_data[1], 'base64')
        .then(() => console.log('Saved successfully'))
        .catch(errorMessage => console.log(errorMessage));
    }
    if (Platform.OS === 'ios') {
      const options = {
        title: 'Share is your QRcode',
        url: QRImage,
      };
      try {
        await Share.open(options);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const QRLogoImage =
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hellotech.com%2Fguide%2Ffor%2Fhow-to-scan-qr-code-iphone-android&psig=AOvVaw2chEoEF2XZAmly9b02rHz1&ust=1682849121410000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPjTzdLrzv4CFQAAAAAdAAAAABAE';
  const ref = useRef();

  const handleShare = async () => {
    const options = {
      title: 'Share is your QRcode',
      url: QRImage,
    };
    try {
      await Share.open(options);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Generate QRCode</Text>
        <View style={styles.row}>
          <TextInput
            placeholder="Add Value to QRCode"
            style={styles.textInput}
            autoCapitalize="none"
            value={QRvalue}
            onChangeText={setQRValue}
          />
          <TextInput
            placeholder="Add Logo URL"
            style={styles.textInput}
            autoCapitalize="none"
            value={QRLogo}
            onChangeText={setQRLogo}
          />
        </View>
        {/* <QRCode
          size={350}
          value={QRTextValue ? QRTextValue : 'NA'}
          logo={{uri: QRLogoImage}}
          logoSize={60}
          logoBackgroundColor="transparent"
          getRef={ref}
        /> */}
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            style={styles.newButton}
            onPress={() => GenerateQR()}>
            <Text
              style={[
                styles.sectionDescription,
                { color: '#fff', fontWeight: '900' },
              ]}>
              Generate QR
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.Button} onPress={() => handleShare()}>
            <Text
              style={[
                styles.sectionDescription,
                { color: '#fff', fontWeight: '900' },
              ]}>
              Share QR
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => handleSave()}>
            <Text
              style={[
                styles.sectionDescription,
                { color: '#fff', fontWeight: '900' },
              ]}>
              Save QR
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ScanQRCode;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
  },
  textInput: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    textAlign: 'center',
    marginRight: 20,
    marginVertical: 20,
    borderRadius: 20,
    width: 162,
    borderWidth: 1,
    borderStyle: 'solid',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  newButton: {
    backgroundColor: '#D25C34',
    // bgColor='#D25C34',
    // bgColor2='#951516',
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 75,
    borderRadius: 20,
    paddingBottom: 17,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    backgroundColor: '#D25C34',
    marginTop: 32,
    marginRight: 50,
    paddingVertical: 5,
    paddingHorizontal: 35,
    borderRadius: 20,
    paddingBottom: 17,
  },
});
