import React from 'react';

import {StatusBar} from 'react-native';
import {$COLORS} from 'react-native-smiles-ar-uikit';
import {Provider} from 'react-redux';
import '@locale';

import {useAPP} from '@hooks';
import {Routes} from '@routes';
import {store} from '@store';

export default function App() {
  useAPP();

  return (
    <Provider store={store}>
      <StatusBar backgroundColor={$COLORS.primaryDark} />
      <Routes />
    </Provider>
  );
}
