import { TUiColors, TUiFontWeight } from "@/ui-kit/types";

export interface ITypographyProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  component?:
    | "span"
    | "p"
    | "article"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
  color?: TUiColors;
  variant?:
    | "body"
    | "body2"
    | "body3"
    | "body4"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "button_label";
  fontWeight?: TUiFontWeight;
  textTransform?: "capitalize" | "uppercase" | "lowercase";
}
