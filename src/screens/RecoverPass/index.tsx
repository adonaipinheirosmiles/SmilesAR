import React from 'react';

import {Formik} from 'formik';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {$COLORS, Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {useRecoverPass} from './hooks/useRecoverPass';

export function RecoverPass() {
  const {handleGoBack, initialValues, RecoverPassSchema, t} = useRecoverPass();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recuperar senha</Text>
      <Separator vertical size={24} />
      <Formik
        initialValues={initialValues}
        onSubmit={() => {}}
        validationSchema={RecoverPassSchema}>
        {({values, errors, handleChange}) => (
          <>
            <Input
              value={values.email}
              error={errors.email}
              autoCapitalize="none"
              onChangeText={handleChange('email')}
              placeholder={t('recover_input')}
              style={styles.input}
            />
            <Separator vertical size={12} />
            <Button text={t('recover_button')} />
          </>
        )}
      </Formik>
      <TouchableOpacity
        onPress={handleGoBack}
        style={styles.button}
        hitSlop={20}>
        <Text style={styles.buttonText}>{t('back')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: $COLORS.primary,
  },
  input: {
    height: 40,
  },
  button: {
    position: 'absolute',
    bottom: 20,
  },
  buttonText: {
    color: $COLORS.primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
