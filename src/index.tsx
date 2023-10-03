import React, {useCallback, useEffect} from 'react';

import {Home} from '@screens';
import {Services} from '@services';

export default function App() {
  const {getUser} = Services.github;

  const getData = useCallback(() => {
    getUser('adonaipinheiro').then(resp => {
      resp.login;
    });
  }, [getUser]);

  useEffect(() => {
    getData();
  }, [getData]);

  return <Home />;
}
