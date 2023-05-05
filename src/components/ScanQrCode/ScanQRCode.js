import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {Button} from 'react-native-paper';

const ScanQRCode = () => {
  const [on, setOn] = useState(on);
  const onSuccess = e => {
    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
    Alert.alert(e.data);
  };
  const torchcontroll = () => {
    console.log('control flash light');
  };
  return (
    <>
      <QRCodeScanner
        reactivateTimeout={1000}
        reactivate={true}
        onRead={onSuccess}
        // flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            Go to{''}
            <Text style={styles.textBold}>
              on your computer and scan the QR code.
            </Text>
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
      />
      <Button title={'torch'} onPress={torchcontroll} />
    </>
  );
};

export default ScanQRCode;

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
