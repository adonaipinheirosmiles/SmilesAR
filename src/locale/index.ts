/* eslint-disable import/no-named-as-default */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Config from 'react-native-config';

import {ptBR} from './ptBR';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ptBR,
  },
  lng: Config.APP_LANGUAGE,
  fallbackLng: Config.APP_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
});
