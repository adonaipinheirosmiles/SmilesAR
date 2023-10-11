import React from 'react';

import {Image, SafeAreaView} from 'react-native';

import {Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {images} from '@assets';

import {useSignIn} from './hooks/useSignIn';
import {styles} from './styles';

export const SignIn = () => {
  const {t, handleButton} = useSignIn();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={images.smilesLogo}
        style={styles.img}
        resizeMode="contain"
      />
      <Separator size={36} vertical />
      <Input
        style={styles.input}
        placeholder={t('signin_input_email')}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Separator size={11} vertical />
      <Input
        style={styles.input}
        placeholder={t('signin_input_password')}
        secureTextEntry
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
      <Separator size={11} vertical />
      <Button onPress={handleButton} text={t('signin_button')} />
    </SafeAreaView>
  );
};
