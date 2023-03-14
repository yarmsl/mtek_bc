import React from "react";

import clsx from "clsx";

import { IIconsProps } from "./types";

const Icon: React.FC<IIconsProps> = ({
  children,
  color = "primary",
  size = 24,
  className,
}) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={clsx(`c_${color}`, className)}
    >
      {children}
    </div>
  );
};

export default React.memo(Icon);
