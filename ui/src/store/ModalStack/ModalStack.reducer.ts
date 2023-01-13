import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IModalStack[] = [];

export const ModalStackSlice = createSlice({
  name: 'modalStack',
  initialState,
  reducers: {
    openModal: (state: IModalStack[], action: PayloadAction<ModalStackTypes>) => {
      state.push({ open: true, window: action.payload });
    },
    closeModal: (state: IModalStack[]) => {
      state[state.length - 1].open = false;
    },
    removeModal: (state: IModalStack[]) => {
      state.pop();
    },
  },
});

export const { openModal, closeModal, removeModal } = ModalStackSlice.actions;
export const { reducer: ModalStackReducer } = ModalStackSlice;
