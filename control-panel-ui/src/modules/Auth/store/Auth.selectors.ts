import { createSelector } from '@reduxjs/toolkit';

import { TRootState } from '~/store';

const authStateSelector = (state: TRootState): IAuthState => state.auth;

export const isAuthSelector = createSelector(authStateSelector, (authState) => authState.isAuth);

export const accessTokenSelector = createSelector(
  authStateSelector,
  (authState) => authState.access_token,
);
