import { FC, memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import Loading from '~/ui-kit/atoms/Loading/';

import { root } from './styles';

const AuthLayout: FC = () => {
  return (
    <Container component='main' maxWidth='lg' sx={root}>
      <Suspense fallback={<Loading fullscreen />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default memo(AuthLayout);
