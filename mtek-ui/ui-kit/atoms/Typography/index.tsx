import { HTMLAttributes } from "react";

import { clsx } from "clsx";

import { TUiColors } from "@/ui-kit/types";

interface ITypographyProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
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
  variant?: "body" | "body2" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontWeight?: 300 | 400 | 500 | 700 | 900;
}

export const Typography: React.FC<ITypographyProps> = ({
  children = "Typography",
  className,
  component = "span",
  color = "text_common",
  variant = "body",
  fontWeight = 400,
  ...rest
}) => {
  const TypographyTag = component;
  return (
    <TypographyTag
      className={clsx(
        `fw_${fontWeight}`,
        `c_${color}`,
        `${variant}`,
        className
      )}
      {...rest}
    >
      {children}
    </TypographyTag>
  );
};

export default Typography;
