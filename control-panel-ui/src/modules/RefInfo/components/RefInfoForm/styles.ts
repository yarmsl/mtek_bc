import { SxProps } from '@mui/material';

export const root: SxProps = {
  width: '400px',
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  '&>*:not(:last-child)': {
    mb: '10px',
  },
};
