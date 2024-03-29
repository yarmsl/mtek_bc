import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { Box, Checkbox, FormControlLabel, FormHelperText, Typography } from '@mui/material';

const LabeledCheckBox: React.FC<IControlledCheckBoxProps> = ({
  label,
  name,
  required,
  uncontrolled,
  ...rest
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box
          sx={{
            display: 'flex',
            flexDirection: uncontrolled ? 'row' : 'column',
            position: 'relative',
            alignItems: 'center',
          }}
        >
          {uncontrolled ? (
            <>
              <Checkbox checked={value} onChange={onChange} {...rest} />
              <Typography variant='body2'>{label}</Typography>
            </>
          ) : (
            <>
              <FormControlLabel
                control={<Checkbox checked={value} onChange={onChange} {...rest} />}
                label={<Typography variant='body2'>{label}</Typography>}
                value={value}
                onChange={onChange}
              />{' '}
            </>
          )}
          {required && error && (
            <FormHelperText
              sx={{
                position: 'absolute',
                top: '35px',
                left: '16px',
                whiteSpace: 'nowrap',
              }}
              error
            >
              {error.message}
            </FormHelperText>
          )}
        </Box>
      )}
    />
  );
};

export default React.memo(LabeledCheckBox);
