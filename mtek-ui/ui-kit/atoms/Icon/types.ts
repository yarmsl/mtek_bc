import { TUiColors } from "@/ui-kit/types";

export interface IIconsProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  children: React.ReactNode;
  color?: TUiColors;
  size?: number;
  className?: string;
}
