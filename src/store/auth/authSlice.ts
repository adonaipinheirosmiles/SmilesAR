import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  token: string;
}

const initialState: AuthState = {
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    removeAuthToken: state => {
      state.token = '';
    },
  },
});

export const {setAuthToken, removeAuthToken} = authSlice.actions;

export default authSlice.reducer;
