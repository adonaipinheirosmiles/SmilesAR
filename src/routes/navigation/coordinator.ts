import {navigation} from './navigation';
import {AuthStackScreenNames} from '../stack/AuthStack';

const AuthCoordinator = {
  goToSignIn: () => navigation.push(AuthStackScreenNames.SignIn),
  goToSignInWithOutRollback: () =>
    navigation.replace(AuthStackScreenNames.SignIn),
  goToSignup: () => navigation.push(AuthStackScreenNames.SignUp),
  goToRecoverPass: () => navigation.push(AuthStackScreenNames.RecoverPass),
};

const LoggedCoordinator = {
  goToHome: () => navigation.replace(AuthStackScreenNames.Home),
};

export const coordinator = {
  ...AuthCoordinator,
  ...LoggedCoordinator,
  goBack: () => navigation.goBack(),
};
