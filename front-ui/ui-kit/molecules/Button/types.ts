import { TUiColors, TUiShadows, TUiSizes } from "@/ui-kit/types";

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "contained" | "outlined" | "text";
  size?: TUiSizes;
  color?: TUiColors;
  fullWidth?: boolean;
  shadow?: TUiShadows;
  icon?: JSX.Element;
  iconSize?: number;
  iconColor?: TUiColors;
  iconAside?: boolean;
}
