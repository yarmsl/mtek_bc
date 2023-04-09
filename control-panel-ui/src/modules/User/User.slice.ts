import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import { initialState } from './initialState';
import { checkAuthThunk, signInThunk, signUpThunk } from '../Auth/store';

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    clearUser: (state) => {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      const { email, firstName, lastName, role } = jwtDecode<IToken<IUser>>(
        action.payload.access_token,
      );

      Object.assign(state, { email, firstName, lastName, role });
    });
    builder.addCase(signUpThunk.rejected, (state) => {
      Object.assign(state, initialState);
    });

    builder.addCase(signInThunk.fulfilled, (state, action) => {
      const { email, firstName, lastName, role } = jwtDecode<IToken<IUser>>(
        action.payload.access_token,
      );

      Object.assign(state, { email, firstName, lastName, role });
    });
    builder.addCase(signInThunk.rejected, (state) => {
      Object.assign(state, initialState);
    });

    builder.addCase(checkAuthThunk.fulfilled, (state, action) => {
      const { email, firstName, lastName, role } = jwtDecode<IToken<IUser>>(
        action.payload.access_token,
      );

      Object.assign(state, { email, firstName, lastName, role });
    });
    builder.addCase(checkAuthThunk.rejected, (state) => {
      Object.assign(state, initialState);
    });
  },
});

export const { clearUser } = UserSlice.actions;
export const { reducer: UserReducer } = UserSlice;
