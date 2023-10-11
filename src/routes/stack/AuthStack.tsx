import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home, SignIn} from '@screens';

export const AuthStackScreenNames = {
  SignIn: 'SignIn',
  Home: 'Home',
} as const;

export type AuthStackParams = {
  [AuthStackScreenNames.SignIn]: undefined;
  [AuthStackScreenNames.Home]: undefined;
};

const AuthStackNavigator = createNativeStackNavigator<AuthStackParams>();

export const AuthStack = (
  <>
    <AuthStackNavigator.Screen
      name={AuthStackScreenNames.SignIn}
      component={SignIn}
    />
    <AuthStackNavigator.Screen
      name={AuthStackScreenNames.Home}
      component={Home}
    />
  </>
);
