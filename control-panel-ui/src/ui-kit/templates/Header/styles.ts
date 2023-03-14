import { SxProps } from '@mui/material';

export const headerRootStyles: SxProps = {
  py: '50px',
  backgroundColor: 'background.default',
  boxShadow: 'none',
};

export const headerStyles: SxProps = {
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  alignItems: 'center',

  justifyContent: 'space-between',
};
