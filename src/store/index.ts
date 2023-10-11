import {authSlice} from './auth/authSlice';

export {useAppDispatch, useAppSelector} from './hooks';
export {store} from './store';

// Actions
export const authActions = authSlice.actions;
