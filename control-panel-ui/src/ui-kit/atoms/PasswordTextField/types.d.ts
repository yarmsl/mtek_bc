type IPasswordFieldProps = Omit<
  import('@mui/material').TextFieldProps,
  'type' | 'value' | 'onChange' | 'error' | 'helperText' | 'InputProps' | 'name'
> & {
  name: string;
  /** Имя поля пароль, который требуется проверить */
  confirm?: string;
  secure?: boolean;
  minLength?: number;
  maxLength?: number;
};
