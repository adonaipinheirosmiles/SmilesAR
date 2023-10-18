import {useTranslation} from 'react-i18next';

import {coordinator} from '@routes';
import {userStorage} from '@storage';
import {authActions, useAppDispatch} from '@store';

import {useSignInForm} from './useSignInForm';

export function useSignIn() {
  const {initialValues, SignInSchema} = useSignInForm();
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  function handleButton() {
    coordinator.goToHome();
  }

  function handleSignUpButton() {
    coordinator.goToSignup();
  }

  function handleRecoverButton() {
    coordinator.goToRecoverPass();
  }

  function onSubmit(values: typeof initialValues) {
    dispatch(authActions.setAuthToken(`@TOKEN:${values.email}`));
    userStorage.set('user.email', values.email);
    coordinator.goToHome();
  }

  return {
    t,
    handleButton,
    handleSignUpButton,
    handleRecoverButton,
    initialValues,
    onSubmit,
    SignInSchema,
  };
}
