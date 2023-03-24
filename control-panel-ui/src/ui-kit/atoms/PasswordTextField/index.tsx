import { FC, memo, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { IconButton, InputAdornment, TextField } from '@mui/material';

const PasswordField: FC<IPasswordFieldProps> = ({
  name,
  confirm,
  secure,
  minLength,
  maxLength,
  ...rest
}) => {
  const { control, watch } = useFormContext();
  const [vis, setVis] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          error={!!error}
          helperText={error ? error.message : null}
          type={vis ? 'text' : 'password'}
          value={value}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton size={rest.size || 'medium'} onClick={() => setVis((p) => !p)}>
                  {vis ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={onChange}
          {...rest}
        />
      )}
      rules={{
        required: rest.required ? 'Введите пароль' : false,
        validate: (value) =>
          confirm != null
            ? value !== watch(confirm)
              ? 'Пароли не совпадают'
              : undefined
            : undefined,
        pattern: secure
          ? {
              value: /(?=.*[0-9])(?=.*[a-zа-яA-ZА-Я])[0-9a-zA-Zа-яА-Я!@#$%^&*]/g,
              message: 'Пароль должен быть сложным',
            }
          : undefined,
        minLength:
          minLength != null
            ? {
                value: minLength,
                message: `Минимум ${minLength} символов`,
              }
            : undefined,
        maxLength:
          maxLength != null
            ? {
                value: maxLength,
                message: `Максимум ${maxLength} символов`,
              }
            : undefined,
      }}
    />
  );
};

export default memo(PasswordField);
