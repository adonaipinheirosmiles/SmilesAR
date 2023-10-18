import ptBRCommom from './ptBR-commom.json';
import homeLocale from '../screens/Home/locale/pt-BR.json';
import recoverPassLocale from '../screens/RecoverPass/locale/pt-BR.json';
import signInLocale from '../screens/SignIn/locale/pt-BR.json';
import signUpLocale from '../screens/SignUp/locale/pt-BR.json';

export const ptBR = {
  translation: {
    ...ptBRCommom,
    ...signInLocale,
    ...signUpLocale,
    ...homeLocale,
    ...recoverPassLocale,
  },
};
