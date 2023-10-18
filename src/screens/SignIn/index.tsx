import React from 'react';

import {Formik} from 'formik';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {images} from '@assets';

import {useSignIn} from './hooks/useSignIn';
import {styles} from './styles';

export const SignIn = () => {
  const {
    t,
    initialValues,
    onSubmit,
    SignInSchema,
    handleSignUpButton,
    handleRecoverButton,
  } = useSignIn();

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={images.smilesLogo}
        style={styles.img}
        resizeMode="contain"
      />
      <Separator size={36} vertical />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={SignInSchema}>
        {({values, errors, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
              style={styles.input}
              placeholder={t('signin_input_email')}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Separator size={11} vertical />
            <Input
              value={values.pass}
              onChangeText={handleChange('pass')}
              error={errors.pass}
              style={styles.input}
              placeholder={t('signin_input_password')}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
            />
            <Separator size={11} vertical />
            <Button onPress={() => handleSubmit()} text={t('signin_button')} />
            <View style={styles.footer}>
              <TouchableOpacity
                onPress={handleSignUpButton}
                hitSlop={16}
                activeOpacity={0.7}>
                <Text style={styles.signUpText}>
                  {t('signin_button_signup')}
                </Text>
              </TouchableOpacity>
              <Separator size={24} vertical />
              <TouchableOpacity
                onPress={handleRecoverButton}
                hitSlop={16}
                activeOpacity={0.7}>
                <Text style={styles.signUpText}>
                  {t('signin_button_forgotpass')}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};
