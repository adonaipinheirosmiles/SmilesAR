import axios from 'axios';

import {errorHandler} from 'src/services/utils/errorHandler';

import {GithubUserType} from './types';

const githubInstance = axios.create({
  baseURL: 'https://api.github.com',
});

function githubServices() {
  async function getUser(user: string): Promise<GithubUserType> {
    try {
      const githubUser = await githubInstance
        .get<GithubUserType>(`users/${user}`)
        .then(resp => resp.data);
      return githubUser;
    } catch (error: any) {
      throw errorHandler(error);
    }
  }

  return {
    getUser,
  };
}

export {githubServices};
