"use client";

import React from "react";

import clsx from "clsx";

import Icon from "@/ui-kit/atoms/Icon";

import styles from "./input.module.css";
import { IInputProps } from "./types";

const Input: React.FC<IInputProps> = ({
  color = "grey_2",
  size = "medium",
  icon = undefined,
  iconColor = "primary",
  iconSize = 14,
  ...rest
}) => {
  const [isFocused, setFocused] = React.useState(false);

  const handleFocus: React.FocusEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        setFocused(true);
        rest.onFocus && rest.onFocus(e);
      },
      [rest]
    );

  const handleBlur: React.FocusEventHandler<HTMLInputElement> =
    React.useCallback(
      (e) => {
        setFocused(false);
        rest.onBlur && rest.onBlur(e);
      },
      [rest]
    );

  return (
    <div
      className={clsx(
        styles.wrapper,
        styles[size],
        `bc_${color}`,
        isFocused && styles.focus,
        rest.className
      )}
    >
      {icon ? (
        <Icon color={iconColor} size={iconSize} className={styles.icon}>
          {icon}
        </Icon>
      ) : null}
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={clsx(styles.root)}
        {...rest}
      />
    </div>
  );
};

export default React.memo(Input);
