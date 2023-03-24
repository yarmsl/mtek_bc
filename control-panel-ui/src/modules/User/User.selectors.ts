import { createSelector } from '@reduxjs/toolkit';

import { TRootState } from '~/store';

const userStateSelector = (state: TRootState): IUserState => state.user;

export const userSelector = createSelector(userStateSelector, (userState) => userState);
