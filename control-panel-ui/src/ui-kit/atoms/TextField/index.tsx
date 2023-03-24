import { FC, memo } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

const MegaTextField: FC<ITextFieldProps> = ({
  children,
  name,
  min,
  max,
  minLength,
  maxLength,
  defaultValue,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      defaultValue={defaultValue != null ? defaultValue : undefined}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          error={!!error}
          helperText={error ? error.message : null}
          value={value}
          onChange={onChange}
          {...rest}
        >
          {children}
        </TextField>
      )}
      rules={{
        required: rest.required ? 'Поле обязательно к заполнению' : false,
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
        min:
          min != null
            ? {
                value: min,
                message: `Минимальное значение ${min}`,
              }
            : undefined,
        max:
          max != null
            ? {
                value: max,
                message: `Максимальное значение ${max}`,
              }
            : undefined,
      }}
    />
  );
};

export default memo(MegaTextField);
