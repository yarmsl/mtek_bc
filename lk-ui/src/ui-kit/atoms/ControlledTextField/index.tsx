import { ChangeEvent, FC, memo, useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { TextField } from '@mui/material';

const MegaTextField: FC<IControlledTextFieldProps> = ({
  children,
  name,
  min,
  max,
  minLength,
  maxLength,
  integer,
  integerWithoutSpace,
  defaultValue,
  locale,
  changeLinks,
  specialOnChange,
  ...rest
}) => {
  const { control } = useFormContext();
  const specialChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, value: string) => {
      if (integer) {
        const res = (+e.target.value.replace(/[^\d]/g, '')).toLocaleString(locale || 'ru-RU');
        return res === '0' ? '' : res;
      } else if (changeLinks) {
        return changeLinks(e.target.value, value);
      } else if (specialOnChange) {
        specialOnChange();
        return e.target.value;
      } else if (integerWithoutSpace) {
        const res = (+e.target.value.replace(/[^\d]/g, '')).toString();
        return res === '0' ? '' : res;
      } else {
        return e.target.value;
      }
    },
    [integer, changeLinks, specialOnChange, locale, integerWithoutSpace],
  );

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
          onChange={(e) => onChange(specialChange(e, value))}
          {...rest}
        >
          {children}
        </TextField>
      )}
      rules={{
        required: rest.required ? 'Required' : false,
        minLength:
          minLength != null
            ? {
                value: minLength,
                message: `Minimum ${minLength} symbols`,
              }
            : undefined,
        maxLength:
          maxLength != null
            ? {
                value: maxLength,
                message: `Maximum ${minLength} symbols`,
              }
            : undefined,
        min:
          min != null
            ? {
                value: min,
                message: `Minimum ${min}`,
              }
            : undefined,
        max:
          max != null
            ? {
                value: max,
                message: `Maximum ${max}`,
              }
            : undefined,
      }}
    />
  );
};

export default memo(MegaTextField);
