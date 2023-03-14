import { TUiColors, TUiSizes } from "@/ui-kit/types";

export interface IInputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "size"
  > {
  color?: TUiColors;
  size?: TUiSizes;
  icon?: JSX.Element;
  iconSize?: number;
  iconColor?: TUiColors;
}
