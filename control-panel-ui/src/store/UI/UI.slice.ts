import { createSlice } from '@reduxjs/toolkit';

import { initialState } from './initialState';

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    toggleDarkMode: (state: UIState) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = UISlice.actions;
export const { reducer: UIReducer } = UISlice;
