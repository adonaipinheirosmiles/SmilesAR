import {navigation} from './navigation';
import {AuthStackScreenNames} from '../stack/AuthStack';

const AuthCoordinator = {
  goToSignIn: () => navigation.push(AuthStackScreenNames.SignIn),
  goToHome: () => navigation.push(AuthStackScreenNames.Home),
};

export const coordinator = {
  ...AuthCoordinator,
  goBack: () => navigation.goBack(),
};
