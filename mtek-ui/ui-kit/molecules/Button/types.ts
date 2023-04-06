import { IIconsProps } from "@/ui-kit/atoms/Icon/types";
import { ITypographyProps } from "@/ui-kit/atoms/Typography/types";
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
  iconProps?: Omit<IIconsProps, "children">;
  iconAside?: boolean;
  typographyProps?: ITypographyProps;
}
