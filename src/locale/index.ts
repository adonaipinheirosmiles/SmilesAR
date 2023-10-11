/* eslint-disable import/no-named-as-default */
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import {ptBR} from './ptBR';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ptBR,
  },
  lng: 'ptBR',
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false,
  },
});
