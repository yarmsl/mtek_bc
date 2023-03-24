import { createAsyncThunk } from '@reduxjs/toolkit';

import { apiGet, apiPost } from '~/lib/api';
import { TAppDispatch, TRootState } from '~/store';
import { showSnackBar } from '~/store/SnackStack';

export const signUpThunk = createAsyncThunk<
  ITokens,
  ISignUpDto,
  { state: TRootState; dispatch: TAppDispatch }
>('signup', async (dto, { dispatch, rejectWithValue }) => {
  try {
    return await apiPost<ITokens, ISignUpDto>('auth/signup', dto);
  } catch (e) {
    dispatch(
      showSnackBar({
        title: 'Ошибка',
        message: e instanceof Error ? e.message : '',
        severity: 'error',
        variant: 'outlined',
      }),
    );
    return rejectWithValue(e);
  }
});

export const signInThunk = createAsyncThunk<
  ITokens,
  ISignInDto,
  { state: TRootState; dispatch: TAppDispatch }
>('signin', async (dto, { dispatch, rejectWithValue }) => {
  try {
    return await apiPost<ITokens, ISignInDto>('auth/signin', dto);
  } catch (e) {
    dispatch(
      showSnackBar({
        title: 'Ошибка',
        message: e instanceof Error ? e.message : '',
        severity: 'error',
        variant: 'outlined',
      }),
    );
    return rejectWithValue(e);
  }
});

export const refreshTokenThunk = createAsyncThunk<
  Pick<ITokens, 'access_token'>,
  void,
  { state: TRootState; dispatch: TAppDispatch }
>('refresh', async (_, { getState, rejectWithValue }) => {
  const { access_token } = getState().auth;
  try {
    return await apiGet<{ access_token: string }>('auth/refresh', access_token);
  } catch (e) {
    return rejectWithValue(e);
  }
});

export const checkAuthThunk = createAsyncThunk<
  ITokens,
  void,
  { state: TRootState; dispatch: TAppDispatch }
>('checkAuth', async (_, { getState, rejectWithValue }) => {
  const { refresh_token } = getState().auth;
  try {
    return await apiGet<ITokens>('auth/check', refresh_token);
  } catch (e) {
    return rejectWithValue(e);
  }
});
