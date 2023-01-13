import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    toggleDarkMode: (state: UIState) => {
      state.darkMode = !state.darkMode;
    },
    toggleBurgerMenu: (state) => {
      state.isBurgerMenuOpen = !state.isBurgerMenuOpen;
    },
  },
});

export const { toggleDarkMode, toggleBurgerMenu } = UISlice.actions;
export const { reducer: UIReducer } = UISlice;
