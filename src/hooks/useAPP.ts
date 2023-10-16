import {useEffect} from 'react';

import {logCrashlytics} from '@analytics';

import {useInterceptors} from './useInterceptors';

export function useAPP() {
  useInterceptors();

  function setupApp() {
    logCrashlytics('App mounted');
  }

  useEffect(() => {
    setupApp();
  }, []);
}
