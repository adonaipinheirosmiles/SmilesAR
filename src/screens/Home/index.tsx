import React from 'react';

import {Image, Text, View} from 'react-native';

import {Button} from 'react-native-smiles-ar-uikit';

import {images} from '@assets';
import {coordinator} from '@routes';

export const Home = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>Home</Text>
      <Image source={images.smilesLogo} />
      <Button
        text="Voltar"
        onPress={() => {
          coordinator.goBack();
        }}
      />
    </View>
  );
};
