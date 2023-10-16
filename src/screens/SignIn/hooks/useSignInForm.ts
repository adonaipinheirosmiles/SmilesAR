import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';

export function useSignInForm() {
  const {t} = useTranslation();

  const initialValues = {
    email: 'adonai@smiles.com.br',
    pass: '123456',
  };

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email(t('signin_field_email_incorrect'))
      .required(t('signin_field_required')),
    pass: Yup.string().required(t('signin_field_required')),
  });

  return {
    initialValues,
    SignInSchema,
  };
}
