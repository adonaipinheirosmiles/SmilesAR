import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';

import {coordinator} from '@routes';
import {authActions, useAppDispatch} from '@store';

export function useSignUp() {
  const {t} = useTranslation();
  const dispatch = useAppDispatch();

  const initialValues = {
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
  };

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required(t('signup_field_required')),
    email: Yup.string()
      .email(t('signup_field_email_incorrect'))
      .required(t('signup_field_required')),
    pass: Yup.string().required(t('signup_field_required')),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('pass')], t('signup_field_confirm_pass_incorrect'))
      .required(t('signup_field_required')),
  });

  function handleButton() {
    coordinator.goToHome();
  }

  function onSubmit(values: typeof initialValues) {
    dispatch(authActions.setAuthToken(`@TOKEN:${values.email}`));
    handleButton();
  }

  function handleBack() {
    coordinator.goBack();
  }

  return {
    t,
    handleButton,
    handleBack,
    initialValues,
    onSubmit,
    SignUpSchema,
  };
}
