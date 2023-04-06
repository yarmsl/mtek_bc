import clsx from "clsx";

import { TUiColors } from "@/ui-kit/types";

import styles from "./link.module.css";

interface ILinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  color?: TUiColors;
  fontWeight?: 300 | 400 | 500 | 700 | 900;
  variant?:
    | "body"
    | "body2"
    | "body3"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
}

const Link: React.FC<ILinkProps> = ({
  color = "text_common",
  fontWeight = 400,
  variant = "body",
  className,
  ...rest
}) => {
  return (
    <a
      className={clsx(
        `fw_${fontWeight}`,
        `c_${color}`,
        `${variant}`,
        styles.root,
        className
      )}
      {...rest}
    />
  );
};

export default Link;
