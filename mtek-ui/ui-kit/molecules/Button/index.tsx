"use client";

import React from "react";

import { clsx } from "clsx";

import Icon from "@/ui-kit/atoms/Icon";
import Typography from "@/ui-kit/atoms/Typography";
import useRipple from "@/ui-kit/hooks/useRipple";

import styles from "./button.module.css";
import { IButtonProps } from "./types";
import { getTextColor } from "./utils";

const Button: React.FC<IButtonProps> = ({
  children = "Button",
  className,
  variant = "contained",
  size = "medium",
  color = "primary",
  fullWidth = false,
  shadow = undefined,
  onClick = undefined,
  icon = undefined,
  iconColor = undefined,
  iconSize = 24,
  iconAside = false,
  ...rest
}) => {
  const textColor = React.useMemo(
    () => getTextColor(variant, color),
    [color, variant]
  );

  const { Ripple, rippleProps, rippledClick } = useRipple(textColor, onClick);

  return (
    <button
      className={clsx(
        styles.common,
        size !== "medium" && variant !== "outlined" && styles[size],
        fullWidth && "fullWidth",
        shadow && `box_shadow_${shadow}`,
        variant === "contained" ? `bg_${color}` : "bg_tp",
        variant === "outlined" &&
          `${styles[`${size}Outlined`]} ${styles.outlined} bc_${color}`,
        className
      )}
      onClick={rippledClick}
      {...rest}
    >
      <Ripple {...rippleProps}>
        <Typography
          fontWeight={variant === "text" ? 700 : 500}
          color={textColor}
          variant={size === "small" ? "body2" : undefined}
          className={clsx(styles.text, iconAside && styles.iconAside)}
        >
          {icon ? (
            <Icon
              color={iconColor || textColor}
              size={iconSize}
              className={styles.icon}
            >
              {icon}
            </Icon>
          ) : null}
          {children}
          {iconAside ? <span style={{ width: `${iconSize}px` }} /> : null}
        </Typography>
      </Ripple>
    </button>
  );
};

export default React.memo(Button);
