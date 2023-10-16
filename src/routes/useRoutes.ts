import {useRef} from 'react';

import {logScreen} from '@analytics';

import {navigationRef} from './navigation/navigation';

export function useRoutes() {
  const routeNameRef = useRef<string>();

  function onReady() {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  }

  async function onScreenChange() {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      logScreen(currentRouteName);
    }
    routeNameRef.current = currentRouteName;
  }

  return {
    onReady,
    onScreenChange,
  };
}
