import { SxProps } from '@mui/material';

export const root: SxProps = {
  width: '100%',
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  '& > *:not(:last-child)': {
    mb: 2,
  },
};

export const form: SxProps = {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  gridColumnGap: '10px',
  gridRowGap: '10px',
};

export const formItem: SxProps = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  p: 2,
  borderWidth: '1px',
  borderColor: 'primary.main',
  borderStyle: 'solid',
  borderRadius: 1,
};
