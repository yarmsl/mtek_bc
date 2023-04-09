import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Box, Button } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';
import { useAppDispatch } from '~/store';
import EmailTextField from '~/ui-kit/atoms/EmailTextField';
import PasswordTextField from '~/ui-kit/atoms/PasswordTextField';

import { root, controls } from './styles';
import { signInThunk } from '../../store';

const Signin: React.FC = () => {
  const dispatch = useAppDispatch();

  const { goToCb, goHome } = useRouter();
  const methods = useForm<ISignInDto>({ defaultValues: { email: '', password: '' } });
  const { handleSubmit } = methods;

  const handleSignin = React.useCallback(
    async (dto: ISignInDto) => {
      await dispatch(signInThunk(dto));
      goHome();
    },
    [dispatch, goHome],
  );

  return (
    <FormProvider {...methods}>
      <Box component='form' sx={root} onSubmit={handleSubmit(handleSignin)}>
        <EmailTextField
          autoComplete='email'
          label='Почта'
          name='email'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
        <PasswordTextField
          autoComplete='current-password'
          label='Пароль'
          minLength={8}
          name='password'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
        <Box sx={controls}>
          <Button variant='outlined' fullWidth onClick={goToCb('/signup')}>
            Регистрация
          </Button>
          <Button type='submit' variant='contained' fullWidth onClick={handleSubmit(handleSignin)}>
            Вход
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default React.memo(Signin);
