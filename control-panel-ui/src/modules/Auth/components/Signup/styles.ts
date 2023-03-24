import { SxProps } from '@mui/material';

export const root: SxProps = {
  width: '400px',
  p: 6,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: 10,
  boxShadow: '40px 40px 80px #d9d9d9, -40px -40px 80px #ffffff',
  '&>*:not(:last-child)': {
    mb: '10px',
  },
};

export const controls: SxProps = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  '&>*:not(:last-child)': {
    mr: '30px',
  },
};
