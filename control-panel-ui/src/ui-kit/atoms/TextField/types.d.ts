type ITextFieldProps = Omit<
  import('@mui/material').TextFieldProps,
  'value' | 'onChange' | 'error' | 'helperText' | 'name' | 'defaultValue'
> & {
  name: string;
  minLength?: number;
  maxLength?: number;
  defaultValue?: unknown;
  max?: number;
  min?: number;
};
