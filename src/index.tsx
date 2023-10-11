import React from 'react';

import {StatusBar} from 'react-native';

import {$COLORS} from 'react-native-smiles-ar-uikit';
import {Provider} from 'react-redux';
import '@locale';

import {Routes} from '@routes';
import {store} from '@store';

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={$COLORS.primaryDark} />
      <Routes />
    </Provider>
  );
}
