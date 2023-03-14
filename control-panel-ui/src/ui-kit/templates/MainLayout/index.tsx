import { FC, memo, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import Loading from '~/ui-kit/atoms/Loading/';
import Footer from '~/ui-kit/templates/Footer';
import Header from '~/ui-kit/templates/Header';

import { rootStyles } from './styles';

const MainLayout: FC = () => (
  <Container maxWidth={false} sx={rootStyles} disableGutters>
    <Header />
    <Container component='main' maxWidth='lg'>
      <Suspense fallback={<Loading fullscreen />}>
        <Outlet />
      </Suspense>
    </Container>
    <Footer />
  </Container>
);
export default memo(MainLayout);
