import React from 'react';

import jwtDecode from 'jwt-decode';

import { accessTokenSelector, refreshTokenThunk } from '~/modules/Auth/store';
import { useAppDispatch, useAppSelector } from '~/store';

export const useRefreshToken = (): { refreshAccessToken: () => Promise<void> } => {
  const dispatch = useAppDispatch();

  const access_token = useAppSelector(accessTokenSelector);

  const decoded = React.useMemo(() => jwtDecode<IToken<IUser>>(access_token), [access_token]);

  const remainingTime = React.useMemo(
    () => +`${decoded.exp}000` - new Date().getTime(),
    [decoded.exp],
  );
  const isNeedToRefresh = React.useMemo(() => remainingTime < 5000, [remainingTime]);

  const refreshAccessToken = React.useCallback(async () => {
    if (isNeedToRefresh) await dispatch(refreshTokenThunk());
  }, [dispatch, isNeedToRefresh]);

  return { refreshAccessToken };
};
