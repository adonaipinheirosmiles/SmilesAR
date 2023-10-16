import {navigation} from './navigation';
import {AuthStackScreenNames} from '../stack/AuthStack';

const AuthCoordinator = {
  goToSignIn: () => navigation.push(AuthStackScreenNames.SignIn),
  goToSignInWithOutRollback: () =>
    navigation.replace(AuthStackScreenNames.SignIn),
  goToSignup: () => navigation.push(AuthStackScreenNames.SignUp),
  goToHome: () => navigation.replace(AuthStackScreenNames.Home),
};

export const coordinator = {
  ...AuthCoordinator,
  goBack: () => navigation.goBack(),
};
