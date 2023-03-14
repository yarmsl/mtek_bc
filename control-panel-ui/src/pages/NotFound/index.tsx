import { Box, Button, Typography } from '@mui/material';

import { useRouter } from '~/hooks/useRouter';

const NotFound = (): JSX.Element => {
  const { goHome } = useRouter();

  return (
    <>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography sx={{ m: '20px 0' }} variant='h3'>
          There is no such page yet
        </Typography>
        <Button color='secondary' size='large' variant='contained' onClick={goHome}>
          back to safe
        </Button>
      </Box>
    </>
  );
};

export default NotFound;
