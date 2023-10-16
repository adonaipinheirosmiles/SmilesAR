import {useState} from 'react';

import {Services} from '@smiles-ar/services';
import {type GithubUserReposType} from '@smiles-ar/services/src/modules/github/types';
import {useTranslation} from 'react-i18next';

import {coordinator} from '@routes';

export function useHome() {
  const [githubUser, setGithubUser] = useState<string>('facebook');
  const [repos, setRepos] = useState<GithubUserReposType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const {t} = useTranslation();

  function handleLogout() {
    coordinator.goToSignInWithOutRollback();
  }

  function handleSearchGithubUserRepos() {
    setLoading(true);
    Services.github
      .getUserRepos(githubUser)
      .then(r => {
        setRepos(r);
      })
      .catch(() => {
        setRepos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    githubUser,
    setGithubUser,
    repos,
    loading,
    handleLogout,
    handleSearchGithubUserRepos,
    t,
  };
}
