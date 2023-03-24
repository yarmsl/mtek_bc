import { createSelector } from '@reduxjs/toolkit';

import { TRootState } from '~/store';

const uiSelector = (state: TRootState): UIState => state.ui;

export const darkModeSelector = createSelector(uiSelector, (ui) => ui.darkMode);
