import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import {navigationRef} from './navigation/navigation';
import {AuthStack, AuthStackParams} from './stack/AuthStack';
import {useRoutes} from './useRoutes';

export type RootStackParams = {
  AuthStack: AuthStackParams;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const NavigatorOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const Routes = () => {
  const {onReady, onScreenChange} = useRoutes();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onScreenChange}>
      <RootStack.Navigator screenOptions={NavigatorOptions}>
        {AuthStack}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
