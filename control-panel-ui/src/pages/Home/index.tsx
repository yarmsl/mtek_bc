import { FC } from 'react';

import { Box, Typography } from '@mui/material';

const Home: FC = () => {
  return (
    <Box>
      <Typography variant='h5'>Добро пожаловать в панель управления</Typography>
      <Typography>
        Любые изменения, сделанные при помощие данного инструмента, вступят в силу в течение 1 часа.
      </Typography>
    </Box>
  );
};
export default Home;
