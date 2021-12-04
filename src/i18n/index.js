import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import ar from '../lang/ar.json';
import en from '../lang/en.json';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  init: (_services, _detectorOptions, _i18nextOptions) => {
    /* use services and options */
  },
  detect: callback => {
    AsyncStorage.getItem('APP_LANG', (err, lng) => {
      if (err || !lng) {
        if (err) {
          console.log('Error fetching "APP_LANG" from async store', err);
        } else {
          console.log(
            'No language is set, choosing the best available or English as fallback',
          );
        }
        const bestLng = RNLocalize.findBestAvailableLanguage(['en', 'ar']);

        callback(bestLng.languageTag ?? 'en');
        return;
      }
      callback(lng);
    });
  },
  cacheUserLanguage: lng => {
    AsyncStorage.setItem('APP_LANG', lng);
  },
};

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
