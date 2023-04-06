"use client";
import React from "react";

import clsx from "clsx";

import { IIconsProps } from "./types";

const Icon: React.FC<IIconsProps> = ({
  children,
  color = "primary",
  size = 24,
  className,
  ...rest
}) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px`, minWidth: `${size}px` }}
      className={clsx(`c_${color}`, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default React.memo(Icon);
