import { FC, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

const EmailField: FC<IEmailFieldProps> = ({ name, ...rest }) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          error={!!error}
          helperText={error ? error.message : null}
          type='email'
          value={value}
          onChange={onChange}
          {...rest}
        />
      )}
      rules={{
        required: rest.required ? `Введите почту` : false,
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: `Некоректный почтовый адрес`,
        },
      }}
    />
  );
};

export default memo(EmailField);
