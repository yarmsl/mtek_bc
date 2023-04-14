import React from 'react';

import jwtDecode from 'jwt-decode';

import { accessTokenSelector, refreshTokenThunk } from '~/modules/Auth/store';
import { useAppDispatch, useAppSelector } from '~/store';

export const useRefreshToken = (): {
  refreshAccessToken: () => Promise<void>;
} => {
  const dispatch = useAppDispatch();

  const access_token = useAppSelector(accessTokenSelector);

  const refreshAccessToken = React.useCallback(async () => {
    const decoded = jwtDecode<IToken<IUser>>(access_token);
    const isNeedToRefresh = +`${decoded.exp}000` - new Date().getTime() < 5000;
    if (isNeedToRefresh) await dispatch(refreshTokenThunk());
  }, [access_token, dispatch]);

  return { refreshAccessToken };
};
