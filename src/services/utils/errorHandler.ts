import axios from 'axios';

export interface Exception extends Error {
  code?: number;
}

export function errorHandler(err: any): Exception {
  if (axios.isAxiosError(err)) {
    throw {
      code: Number(err.response?.status),
      message: err.message,
    };
  } else {
    throw err;
  }
}
