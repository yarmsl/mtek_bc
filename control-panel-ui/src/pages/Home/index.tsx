import { FC } from 'react';

import { Box, Button, Typography } from '@mui/material';

import { checkAuthThunk, refreshTokenThunk, signInThunk } from '~/modules/Auth/store';
import { useAppDispatch } from '~/store';
import { toggleDarkMode } from '~/store/UI';

const Home: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <Box>
      <Typography>Hello</Typography>
      <Button
        // onClick={() => dispatch(signInThunk({ email: 'slideryo@gmail.com', password: '12345678' }))}
        onClick={() => dispatch(refreshTokenThunk())}
      >
        refresh
      </Button>
      <Button
        onClick={() => dispatch(signInThunk({ email: 'slideryo@gmail.com', password: '12345678' }))}
      >
        signin
      </Button>
      <Button onClick={() => dispatch(toggleDarkMode())}>dark mode switch</Button>
    </Box>
  );
};
export default Home;
