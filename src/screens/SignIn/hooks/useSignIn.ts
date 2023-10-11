import {useTranslation} from 'react-i18next';

import {coordinator} from '@routes';

export function useSignIn() {
  const {t} = useTranslation();

  function handleButton() {
    coordinator.goToHome();
  }

  return {
    t,
    handleButton,
  };
}
