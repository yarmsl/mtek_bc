type IControlledTextFieldProps = Omit<
  import('@mui/material').TextFieldProps,
  'value' | 'onChange' | 'error' | 'helperText' | 'name' | 'defaultValue'
> & {
  name: string;
  minLength?: number;
  maxLength?: number;
  integer?: boolean;
  defaultValue?: unknown;
  locale?: string;
  max?: number;
  min?: number;
  changeLinks?: (str: string, value: string) => void;
  integerWithoutSpace?: boolean;
  specialOnChange?: () => void;
};
