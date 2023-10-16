import ptBRCommom from './ptBR-commom.json';
import signInLocale from '../screens/SignIn/locale/pt-BR.json';
import signUpLocale from '../screens/SignUp/locale/pt-BR.json';

export const ptBR = {
  translation: {
    ...ptBRCommom,
    ...signInLocale,
    ...signUpLocale,
  },
};
