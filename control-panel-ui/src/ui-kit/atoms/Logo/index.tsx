import React from 'react';

import { Box, ButtonBase, Typography } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';
import MtecLogo from '~/ui-kit/icons/MtecLogo';

import { rootStyles, titleBoxStyles, titleStyles, subtitleStyles } from './styles';

const Logo: React.FC = () => {
  const { goHome } = useRouter();
  return (
    <ButtonBase sx={rootStyles} onClick={goHome}>
      <MtecLogo />
      <Box sx={titleBoxStyles}>
        <Typography component='h1' sx={titleStyles}>
          М-ТЭК
        </Typography>
        <Typography component='h2' sx={subtitleStyles}>
          Многопрофильная транспортно-экспидиционная компания
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default React.memo(Logo);
