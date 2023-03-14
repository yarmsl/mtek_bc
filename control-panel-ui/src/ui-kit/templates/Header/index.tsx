import { FC, memo } from 'react';

import { AppBar, Container, Typography } from '@mui/material';

import { useMedia } from '~/hooks/useMedia';
import ConnectingPeople from '~/ui-kit/atoms/ConnectingPeople';
import Logo from '~/ui-kit/atoms/Logo';

import { headerRootStyles, headerStyles } from './styles';

const Header: FC = () => {
  const { isPortable } = useMedia();
  return (
    <AppBar color='transparent' position='sticky' sx={headerRootStyles}>
      <Container maxWidth='lg' sx={headerStyles}>
        <Logo />
        <Typography
          sx={{
            fontSize: { xs: '28px', md: '22px' },
            fontWeight: { xs: 700, md: 400 },
            color: '#28766A',
            p: '10px 60px',
            border: { xs: 'unset', md: '1px solid #28766A' },
          }}
        >
          Сайт находится в разработке!
        </Typography>
        {!isPortable && <ConnectingPeople />}
      </Container>
    </AppBar>
  );
};

export default memo(Header);
