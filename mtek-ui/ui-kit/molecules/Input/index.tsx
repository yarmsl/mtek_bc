"use client";

import React from "react";

import clsx from "clsx";

import Icon from "@/ui-kit/atoms/Icon";
import { IIconsProps } from "@/ui-kit/atoms/Icon/types";

import styles from "./input.module.css";
import { IInputProps } from "./types";

const initialIconProps: Omit<IIconsProps, "children"> = {
  color: "primary",
  size: 14,
};

const Input = React.forwardRef(
  (
    {
      size = "medium",
      color = "primary",
      onWrapperClick,
      icon,
      iconProps = initialIconProps,
      ...rest
    }: IInputProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={clsx(
          styles.wrapper,
          styles[`wrapper_${size}`],
          `bc_${color}`,
          rest.className && rest.className
        )}
        onClick={onWrapperClick}
        ref={ref}
      >
        {icon ? (
          <Icon
            {...{ ...initialIconProps, iconProps }}
            className={clsx(
              styles.icon,
              iconProps?.className && iconProps.className
            )}
          >
            {icon}
          </Icon>
        ) : null}
        <input
          {...rest}
          className={clsx(styles.root, styles[size], `c_${color}`)}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default React.memo(Input);
