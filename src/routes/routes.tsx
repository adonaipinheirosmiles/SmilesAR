import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {navigationRef} from './navigation/navigation';
import {AuthStack, AuthStackParams} from './stack/AuthStack';

export type RootStackParams = {
  AuthStack: AuthStackParams;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const NavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={NavigatorOptions}>
        {AuthStack}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
