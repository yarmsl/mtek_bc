"use client";

import React from "react";

import { clsx } from "clsx";

import useRipple from "@/hooks/useRipple";
import Icon from "@/ui-kit/atoms/Icon";
import { IIconsProps } from "@/ui-kit/atoms/Icon/types";
import Typography from "@/ui-kit/atoms/Typography";
import { ITypographyProps } from "@/ui-kit/atoms/Typography/types";

import styles from "./button.module.css";
import { IButtonProps } from "./types";
import { getTextColor } from "./utils";

const initialIconProps: Omit<IIconsProps, "children"> = {
  size: 24,
  color: "inherit",
};
const initialTypographyProps: ITypographyProps = {
  color: "inherit",
  fontWeight: 500,
  variant: "button_label",
};

const Button: React.FC<IButtonProps> = ({
  children,
  className,
  variant = "contained",
  size = "medium",
  color = "primary",
  fullWidth = false,
  shadow = undefined,
  onClick = undefined,
  icon = undefined,
  iconProps = initialIconProps,
  iconAside = false,
  typographyProps = initialTypographyProps,
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
        styles[variant],
        size !== "medium" && variant !== "outlined" && styles[size],
        fullWidth && "fullWidth",
        shadow && `box_shadow_${shadow}`,
        variant === "contained" ? `bg_${color}` : "bg_tp",
        variant === "outlined" && `${styles[`${size}Outlined`]} bc_${color}`,
        variant !== "contained" && `c_${color}`,
        className
      )}
      onClick={rippledClick}
      {...rest}
    >
      <Ripple {...rippleProps}>
        <Typography
          {...{ ...initialTypographyProps, ...typographyProps }}
          variant={size === "small" ? "body2" : typographyProps.variant}
          className={clsx(
            styles.typography,
            iconAside && styles.iconAside,
            typographyProps?.className && typographyProps?.className
          )}
        >
          {icon ? (
            <Icon
              {...{ ...initialIconProps, ...iconProps }}
              className={clsx(
                styles.icon,
                iconProps?.className && iconProps?.className
              )}
            >
              {icon}
            </Icon>
          ) : null}
          {children}
          {iconAside ? (
            <span
              style={{
                width: `${iconProps?.size}px`,
                minWidth: `${iconProps?.size}px`,
              }}
            />
          ) : null}
        </Typography>
      </Ripple>
    </button>
  );
};

export default React.memo(Button);
