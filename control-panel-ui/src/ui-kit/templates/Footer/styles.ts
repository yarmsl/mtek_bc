import { SxProps } from '@mui/material';

export const rootStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: { xs: 'column', md: 'row' },
  justifyContent: 'space-between',
  py: '50px',
  '&>*:not(:last-child)': {
    mb: { xs: '20px', md: 'unset' },
  },
};
