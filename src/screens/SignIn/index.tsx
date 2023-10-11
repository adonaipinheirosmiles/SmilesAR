import React from 'react';

import {Image, SafeAreaView} from 'react-native';

import {Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {images} from '@assets';
import {coordinator} from '@routes';
import {authActions, useAppDispatch} from '@store';

import {styles} from './styles';

export const SignIn = () => {
  const dispatch = useAppDispatch();

  function handleButton() {
    coordinator.goToHome();
    dispatch(authActions.setAuthToken('teste'));
  }

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
        placeholder="Digite seu e-mail"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Separator size={11} vertical />
      <Input
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />
      <Separator size={11} vertical />
      <Button onPress={handleButton} text="Entrar" />
    </SafeAreaView>
  );
};
