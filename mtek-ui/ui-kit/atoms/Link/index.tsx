import React, { forwardRef } from "react";

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

// Оборачиваем компонент в forwardRef
const Link = forwardRef<HTMLAnchorElement, ILinkProps>(
  (
    {
      color = "text_common",
      fontWeight = 400,
      variant = "body",
      className,
      ...rest
    },
    ref, // Пробрасываем ref вторым аргументом
  ) => {
    return (
      <a
        ref={ref} // Обязательно передаем ref на тег <a>
        className={clsx(
          `fw_${fontWeight}`,
          `c_${color}`,
          `${variant}`,
          styles.root,
          className,
        )}
        {...rest}
      />
    );
  },
);

// Задаем displayName, так как этого требует ESLint при использовании forwardRef
Link.displayName = "UiLink";

export default Link;
