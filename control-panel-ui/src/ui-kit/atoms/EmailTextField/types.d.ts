type IEmailFieldProps = Omit<
  import('@mui/material').TextFieldProps,
  'type' | 'value' | 'onChange' | 'error' | 'helperText'
> & { name: string };
