import React from 'react';

import {Formik} from 'formik';
import {Image, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {images} from '@assets';

import {useSignUp} from './hooks/useSignUp';
import {styles} from './styles';

export const SignUp = () => {
  const {t, initialValues, onSubmit, SignUpSchema, handleBack} = useSignUp();

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
        validationSchema={SignUpSchema}>
        {({values, errors, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.name}
              onChangeText={handleChange('name')}
              error={errors.name}
              placeholder={t('signup_input_name')}
              autoCapitalize="words"
              style={styles.input}
            />
            <Separator size={11} vertical />
            <Input
              value={values.email}
              onChangeText={handleChange('email')}
              error={errors.email}
              style={styles.input}
              placeholder={t('signup_input_email')}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Separator size={11} vertical />
            <Input
              value={values.pass}
              onChangeText={handleChange('pass')}
              error={errors.pass}
              style={styles.input}
              placeholder={t('signup_input_password')}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
            />
            <Separator size={11} vertical />
            <Input
              value={values.confirmPass}
              onChangeText={handleChange('confirmPass')}
              error={errors.confirmPass}
              style={styles.input}
              placeholder={t('signup_input_confirm_password')}
              secureTextEntry
              autoCapitalize="none"
              autoComplete="off"
              autoCorrect={false}
            />
            <Separator size={11} vertical />
            <Button onPress={() => handleSubmit()} text={t('signup_button')} />
            <Separator size={24} vertical />
            <TouchableOpacity
              onPress={handleBack}
              hitSlop={16}
              activeOpacity={0.7}>
              <Text style={styles.signUpText}>
                {t('signup_button_backtosignin')}
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </SafeAreaView>
  );
};
