import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { AnyAction, combineReducers, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { articlesAPI } from '~/modules/Articles/articles.service';
import { AuthReducer } from '~/modules/Auth/store';
import { filesAPI } from '~/modules/Files/files.service';
import { refInfoAPI } from '~/modules/RefInfo/refInfo.service';
import { UserReducer } from '~/modules/User';

import { ModalStackReducer } from './ModalStack';
import { SnackStackReducer } from './SnackStack';
import { UIReducer } from './UI';

const UIPersistConfig = {
  key: 'ui',
  storage,
  whitelist: ['darkMode'],
};

const AuthPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['access_token', 'refresh_token'],
};

const rootReducer = combineReducers({
  modalStack: ModalStackReducer,
  snackStack: SnackStackReducer,
  ui: persistReducer(UIPersistConfig, UIReducer),
  auth: persistReducer(AuthPersistConfig, AuthReducer),
  user: UserReducer,
  [refInfoAPI.reducerPath]: refInfoAPI.reducer,
  [filesAPI.reducerPath]: filesAPI.reducer,
  [articlesAPI.reducerPath]: articlesAPI.reducer,
});

const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      refInfoAPI.middleware,
      filesAPI.middleware,
      articlesAPI.middleware,
    ),
});

export const persistor = persistStore(appStore);
export type TRootState = ReturnType<typeof appStore.getState>;
export type AppStore = typeof appStore;
export type TAppDispatch = ThunkDispatch<TRootState, null, AnyAction>;
export const useAppDispatch = (): TAppDispatch => useDispatch<TAppDispatch>();
export const useAppSelector: TypedUseSelectorHook<TRootState> = useSelector;
export default appStore;
