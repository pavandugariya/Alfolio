/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from '../../App';
// import WelcomeOnboard from '../components/Welcom_Onboard/WelcomOnboard';
import 'react-native-get-random-values'
import "@ethersproject/shims"

import { name as appName } from '../../app.json';
import i18n from '../../assets/lang/i18n';
AppRegistry.registerComponent(appName, () => App);
