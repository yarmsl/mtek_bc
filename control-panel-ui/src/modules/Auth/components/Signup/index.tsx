import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Box, Button } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';
import { useAppDispatch } from '~/store';
import EmailTextField from '~/ui-kit/atoms/EmailTextField';
import PasswordTextField from '~/ui-kit/atoms/PasswordTextField';
import TextField from '~/ui-kit/atoms/TextField';

import { root, controls } from './styles';
import { signUpThunk } from '../../store';

const Signup: React.FC = () => {
  const dispatch = useAppDispatch();
  const { goToCb, goHome } = useRouter();
  const methods = useForm<ISignUpDto & { confirmPassword: string }>({
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      secret: '',
      confirmPassword: '',
    },
  });
  const { handleSubmit } = methods;

  const handleSignup = React.useCallback(
    async (data: ISignUpDto & { confirmPassword: string }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...dto } = data;
      await dispatch(signUpThunk(dto));
      goHome();
    },
    [dispatch, goHome],
  );

  return (
    <FormProvider {...methods}>
      <Box component='form' sx={root} onSubmit={handleSubmit(handleSignup)}>
        <TextField
          label='Имя'
          name='firstName'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
        <TextField
          label='Фамилия'
          name='lastName'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
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
          autoComplete='new-password'
          label='Пароль'
          minLength={8}
          name='password'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
        <PasswordTextField
          autoComplete='new-password'
          confirm='password'
          label='Повторите пароль'
          name='confirmPassword'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
        <TextField
          label='Секретное слово'
          minLength={4}
          name='secret'
          size='small'
          sx={{ height: '64px' }}
          fullWidth
          required
        />
        <Box sx={controls}>
          <Button variant='outlined' fullWidth onClick={goToCb('/signin')}>
            Вход
          </Button>
          <Button
            color='info'
            type='submit'
            variant='contained'
            fullWidth
            onClick={handleSubmit(handleSignup)}
          >
            Регистрация
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};

export default React.memo(Signup);
