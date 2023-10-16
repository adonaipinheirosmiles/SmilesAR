import React from 'react';

import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {$COLORS} from 'react-native-smiles-ar-uikit';

import {Home, SignIn, SignUp} from '@screens';

export const AuthStackScreenNames = {
  SignIn: 'SignIn',
  SignUp: 'SignUp',
  Home: 'Home',
} as const;

export type AuthStackParams = {
  [AuthStackScreenNames.SignIn]: undefined;
  [AuthStackScreenNames.SignUp]: undefined;
  [AuthStackScreenNames.Home]: undefined;
};

const AuthStackNavigator = createNativeStackNavigator<AuthStackParams>();

const SignUpOption: NativeStackNavigationOptions = {
  headerShown: true,
  headerBackTitleVisible: false,
  headerTintColor: $COLORS.primary,
  headerStyle: {
    backgroundColor: $COLORS.white,
  },
  headerTitle: 'Cadastro',
  animation: 'none',
};

export const AuthStack = (
  <>
    <AuthStackNavigator.Screen
      name={AuthStackScreenNames.SignIn}
      component={SignIn}
    />
    <AuthStackNavigator.Screen
      name={AuthStackScreenNames.SignUp}
      component={SignUp}
      options={SignUpOption}
    />
    <AuthStackNavigator.Screen
      name={AuthStackScreenNames.Home}
      component={Home}
    />
  </>
);
