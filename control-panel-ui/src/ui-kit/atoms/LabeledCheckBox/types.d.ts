type IControlledCheckBoxProps = Omit<
  import('@mui/material').CheckboxProps,
  'checked' | 'onChange'
> & {
  label: string | JSX.Element;
  name: string;
  required?: boolean;
  uncontrolled?: boolean;
};
