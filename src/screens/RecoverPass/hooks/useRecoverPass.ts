import {useTranslation} from 'react-i18next';
import * as Yup from 'yup';

import {coordinator} from '@routes';

export function useRecoverPass() {
  const initialValues = {email: ''};
  const {t} = useTranslation();

  const RecoverPassSchema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  function handleGoBack() {
    coordinator.goBack();
  }

  return {
    handleGoBack,
    initialValues,
    RecoverPassSchema,
    t,
  };
}
