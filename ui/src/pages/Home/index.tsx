import { FC } from 'react';

import { Box } from '@mui/material';

import Meta from '~/ui-kit/atoms/Meta/';

const Home: FC = () => (
  <>
    <Meta title='Home' />
    <Box sx={{ py: '25px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      Home
    </Box>
  </>
);
export default Home;
