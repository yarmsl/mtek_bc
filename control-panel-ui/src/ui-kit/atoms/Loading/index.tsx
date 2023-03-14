import { FC, memo } from 'react';

import { Backdrop, Box, CircularProgress } from '@mui/material';

import { styles } from './styles';

const Loading: FC<ILoadingProps> = ({ fullscreen }) => {
  if (fullscreen)
    return (
      <Backdrop sx={styles.fullscreen} open>
        <CircularProgress />
      </Backdrop>
    );

  return (
    <Box sx={styles.common}>
      <CircularProgress />
    </Box>
  );
};

export default memo(Loading);
