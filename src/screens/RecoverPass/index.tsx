import React from 'react';

import {Formik} from 'formik';
import {Text, TouchableOpacity, View} from 'react-native';
import {Button, Input, Separator} from 'react-native-smiles-ar-uikit';

import {useRecoverPass} from './hooks/useRecoverPass';
import {styles} from './styles';

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
