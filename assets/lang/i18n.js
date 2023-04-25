import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './english.json';
import hi from './hi.json';
import * as RNLocalize from 'react-native-localize';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: callback => {
    return callback(RNLocalize.getLocales()[0].languageCode);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};
i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    // lng: 'hi',
    fallbackLng: 'en',
    compatibilityJSON: 'v3',

    resources: {
      en: en,
      hi: hi,
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
