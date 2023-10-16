import perf from '@react-native-firebase/perf';
import {githubInstance} from '@smiles-ar/services';

import {logCrashlytics} from '@analytics';

export function useInterceptors() {
  githubInstance.interceptors.request.use(async (config: any) => {
    try {
      const httpMetric = perf().newHttpMetric(
        config.url,
        config.method?.toUpperCase(),
      );
      config.metadata = {httpMetric};

      await httpMetric.start();
    } catch (err: any) {
      logCrashlytics(err);
    } finally {
      return config;
    }
  });

  githubInstance.interceptors.response.use(
    async function (response: any) {
      try {
        const {httpMetric} = response.config.metadata;
        httpMetric.setHttpResponseCode(response.status);
        httpMetric.setResponseContentType(response.headers['content-type']);
        await httpMetric.stop();
      } catch (err: any) {
        logCrashlytics(err);
      } finally {
        return response;
      }
    },
    async function (error) {
      try {
        const {httpMetric} = error.config.metadata;
        httpMetric.setHttpResponseCode(error.response.status);
        httpMetric.setResponseContentType(
          error.response.headers['content-type'],
        );
        await httpMetric.stop();
      } finally {
        return Promise.reject(error);
      }
    },
  );
}
