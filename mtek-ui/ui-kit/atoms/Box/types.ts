import { TUiShadows } from "@/ui-kit/types";

export interface IBoxProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  component?: "div" | "section" | "main" | "header" | "nav" | "menu" | "footer";
  shadow?: TUiShadows;
}
