import { FC, memo } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import { Alert, AlertTitle, IconButton, Snackbar, Stack } from '@mui/material';

const SnackStack: FC<ISnackStackLayoutProps> = ({
  cuttedSnackStack,
  spacing,
  top,
  right,
  bottom,
  left,
  transform,
  anchorOrigin,
  handleClose,
  handleCloseByTimeout,
}) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {cuttedSnackStack.length > 0 && (
      <Stack
        spacing={spacing}
        sx={{ position: 'fixed', top, right, bottom, left, transform, zIndex: 1400 }}
      >
        {cuttedSnackStack.map(
          ({
            id,
            open,
            autoHideDuration = 6000,
            title = undefined,
            message,
            severity = undefined,
            variant = undefined,
            closable = false,
          }) => (
            <Snackbar
              key={id}
              anchorOrigin={anchorOrigin}
              autoHideDuration={autoHideDuration}
              open={open}
              sx={{ position: 'relative' }}
              onClose={(event, reason) => handleCloseByTimeout(event, reason, id)}
            >
              <Alert
                severity={severity}
                variant={variant}
                action={
                  closable && (
                    <IconButton
                      aria-label='close'
                      color='inherit'
                      size='small'
                      onClick={() => handleClose(id)}
                    >
                      <CloseIcon fontSize='inherit' />
                    </IconButton>
                  )
                }
              >
                {title && <AlertTitle>{title}</AlertTitle>}
                {message}
              </Alert>
            </Snackbar>
          ),
        )}
      </Stack>
    )}
  </>
);

export default memo(SnackStack);
