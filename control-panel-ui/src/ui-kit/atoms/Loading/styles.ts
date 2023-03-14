import { SxProps } from '@mui/material';

export const styles: Record<string, SxProps> = {
  fullscreen: {
    zIndex: 'modal',
    bgcolor: 'background.default',
    display: 'flex',
    flexDirection: 'column',
  },
  common: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    opacity: '0.18',
    userSelect: 'none',
  },
};
