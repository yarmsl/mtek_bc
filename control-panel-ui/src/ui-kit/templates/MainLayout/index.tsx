import { FC, memo, Suspense, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, Paper, Tab, Tabs } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';
import { routesInfo } from '~/Router';
import Loading from '~/ui-kit/atoms/Loading/';

import { root, wrapper } from './styles';

const MainLayout: FC = () => {
  const {
    goToCb,
    loc: { pathname },
  } = useRouter();

  const tabValue = useMemo(() => {
    const location = pathname.replace('/', '');
    if (routesInfo.some((route) => route.path === location)) return location;
    return false;
  }, [pathname]);

  return (
    <Container component='main' maxWidth='lg' sx={root}>
      <Tabs value={tabValue} variant='scrollable'>
        {routesInfo.map(({ path, title }) => (
          <Tab key={path} label={title} value={path} onClick={goToCb(path)} />
        ))}
      </Tabs>
      <Suspense fallback={<Loading fullscreen />}>
        <Paper sx={wrapper}>
          <Outlet />
        </Paper>
      </Suspense>
    </Container>
  );
};
export default memo(MainLayout);
