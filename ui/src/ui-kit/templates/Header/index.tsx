import { FC, memo } from 'react';

import { AppBar, Container } from '@mui/material';

import { headerRootStyles } from './styles';

const Header: FC = () => {
  return (
    <AppBar color='transparent' position='sticky' sx={headerRootStyles}>
      <Container maxWidth='lg'>Header</Container>
    </AppBar>
  );
};

export default memo(Header);
