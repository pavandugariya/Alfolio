// import {
//   Linking,
//   PermissionsAndroid,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   TouchableHighlight,
//   View,
// } from 'react-native';
// import React from 'react';
// import {CameraScreen} from 'react-native-camera-kit';

// const ScanQRCode = () => {
//   const [qrvalue, setQrvalue] = useState('');
//   const [opneScanner, setOpneScanner] = useState(false);

//   const onOpenlink = () => {
//     Linking.openURL(qrvalue);
//   };

//   const onBarcodeScan = qrvalue => {
//     setQrvalue(qrvalue);
//     setOpneScanner(false);
//   };

//   const onOpneScanner = () => {
//     // To Start Scanning
//     if (Platform.OS === 'android') {
//       async function requestCameraPermission() {
//         try {
//           const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             {
//               title: 'Camera Permission',
//               message: 'App needs permission for camera access',
//             },
//           );
//           if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//             // If CAMERA Permission is granted
//             setQrvalue('');
//             setOpneScanner(true);
//           } else {
//             Alert.alert('CAMERA permission denied');
//           }
//         } catch (err) {
//           Alert.alert('Camera permission err', err);
//           console.warn(err);
//         }
//       }
//       // Calling the camera permission function
//       requestCameraPermission();
//     } else {
//       setQrvalue('');
//       setOpneScanner(true);
//     }
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {opneScanner ? (
//         <View style={{flex: 1}}>
//           <CameraScreen
//             showFrame={false}
//             // Show/hide scan frame
//             scanBarcode={true}
//             // Can restrict for the QR Code only
//             laserColor={'blue'}
//             // Color can be of your choice
//             frameColor={'yellow'}
//             // If frame is visible then frame color
//             colorForScannerFrame={'black'}
//             // Scanner Frame color
//             onReadCode={event =>
//               onBarcodeScan(event.nativeEvent.codeStringValue)
//             }
//           />
//         </View>
//       ) : (
//         <View style={styles.container}>
//           <Text style={styles.titleText}>
//             Barcode and QR Code Scanner using Camera in React Native
//           </Text>
//           <Text style={styles.textStyle}>
//             {qrvalue ? 'Scanned Result: ' + qrvalue : ''}
//           </Text>
//           {qrvalue.includes('https://') ||
//           qrvalue.includes('http://') ||
//           qrvalue.includes('geo:') ? (
//             <TouchableHighlight onPress={onOpenlink}>
//               <Text style={styles.textLinkStyle}>
//                 {qrvalue.includes('geo:') ? 'Open in Map' : 'Open Link'}
//               </Text>
//             </TouchableHighlight>
//           ) : null}
//           <TouchableHighlight
//             onPress={onOpneScanner}
//             style={styles.buttonStyle}>
//             <Text style={styles.buttonTextStyle}>Open QR Scanner</Text>
//           </TouchableHighlight>
//         </View>
//       )}
//     </SafeAreaView>
//   );
// };

// export default ScanQRCode;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//   },
//   titleText: {
//     fontSize: 22,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   textStyle: {
//     color: 'black',
//     fontSize: 16,
//     textAlign: 'center',
//     padding: 10,
//     marginTop: 16,
//   },
//   buttonStyle: {
//     fontSize: 16,
//     color: 'white',
//     backgroundColor: 'green',
//     padding: 5,
//     minWidth: 250,
//   },
//   buttonTextStyle: {
//     padding: 5,
//     color: 'white',
//     textAlign: 'center',
//   },
//   textLinkStyle: {
//     color: 'blue',
//     paddingVertical: 20,
//   },
// });

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScanQRCode = () => {
  return (
    <View>
      <Text>ScanQRCode</Text>
    </View>
  );
};

export default ScanQRCode;

const styles = StyleSheet.create({});
