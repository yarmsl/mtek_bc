import { SxProps } from '@mui/material';

export const rootStyles: SxProps = {
  display: 'flex',
  alignItems: 'center',
};

export const titleBoxStyles: SxProps = {
  maxWidth: '190px',
  ml: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  color: 'common.black',
};

export const titleStyles: SxProps = {
  fontSize: '52px',
  fontWeight: 900,
  lineHeight: '52px',
};

export const subtitleStyles: SxProps = {
  fontSize: '10px',
  fontWeight: 300,
  textAlign: 'left',
  textTransform: 'uppercase',
  hyphens: 'none',
  lineHeight: '10px',
};
