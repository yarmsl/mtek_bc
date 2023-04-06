import { IIconsProps } from "@/ui-kit/atoms/Icon/types";
import { TUiColors, TUiSizes } from "@/ui-kit/types";

import { IInputProps } from "../Input/types";

export interface ISelectProps {
  children: React.ReactNode;
  color?: TUiColors;
  size?: TUiSizes;
  icon?: JSX.Element;
  iconProps?: Omit<IIconsProps, "children">;
  inputProps?: Omit<IInputProps, "size" | "color" | "iconProps" | "icon">;
  value: string;
  placeholder?: string;
}
