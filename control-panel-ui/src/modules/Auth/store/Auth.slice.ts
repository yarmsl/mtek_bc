import { createSlice } from '@reduxjs/toolkit';

import { checkAuthThunk, refreshTokenThunk, signInThunk, signUpThunk } from './Auth.thunks';
import { initialState } from './initialState';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logout: (state: IAuthState) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    });
    builder.addCase(signUpThunk.rejected, (state) => {
      Object.assign(state, initialState);
    });
    builder.addCase(signInThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    });
    builder.addCase(signInThunk.rejected, (state) => {
      Object.assign(state, initialState);
    });

    builder.addCase(refreshTokenThunk.fulfilled, (state, action) => {
      state.access_token = action.payload.access_token;
    });
    builder.addCase(refreshTokenThunk.rejected, (state) => {
      Object.assign(state, initialState);
    });

    builder.addCase(checkAuthThunk.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(checkAuthThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isAuth = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;
    });
    builder.addCase(checkAuthThunk.rejected, (state) => {
      Object.assign(state, initialState);
    });
  },
});

export const { logout } = AuthSlice.actions;
export const { reducer: AuthReducer } = AuthSlice;
