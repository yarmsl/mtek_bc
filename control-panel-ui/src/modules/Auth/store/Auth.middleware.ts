import { Middleware } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

import { AppStore, TAppDispatch } from '~/store';

import { refreshTokenThunk } from '.';

export const TokenMiddleware: Middleware = (store) => (next) => (action) => {
  const token = (store as unknown as AppStore).getState().auth.access_token;
  const dispatch = store.dispatch as unknown as TAppDispatch;
  if (!token) return next(action);
  const decoded = jwtDecode<IToken<IUser>>(token);

  const remainingTime = +`${decoded.exp}000` - new Date().getTime();

  console.log(action);
  console.log(remainingTime);

  if (action.type === 'UI/toggleDarkMode' && remainingTime < 5000) {
    dispatch(refreshTokenThunk());
  }

  return next(action);
};
