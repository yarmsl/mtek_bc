import { FC, memo } from 'react';

import { Box, Container } from '@mui/material';

import { useMedia } from '~/hooks/useMedia';
import AboutLegalEntity from '~/ui-kit/atoms/AboutLegalEntity';
import Logo from '~/ui-kit/atoms/Logo';
import ManagerInfo from '~/ui-kit/atoms/ManagerInfo';

import { rootStyles } from './styles';

const Footer: FC = () => {
  const { isPortable } = useMedia();
  return (
    <Box component='footer'>
      <Container maxWidth='lg' sx={rootStyles}>
        <ManagerInfo />
        <AboutLegalEntity />
        {isPortable && (
          <Box sx={{ transform: 'scale(50%)' }}>
            <Logo />
          </Box>
        )}
      </Container>
    </Box>
  );
};
export default memo(Footer);
