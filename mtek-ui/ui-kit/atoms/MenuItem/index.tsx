"use client";

import React from "react";

import clsx from "clsx";

import { TUiColors } from "@/ui-kit/types";

import styles from "./menuItem.module.css";

interface IMenuItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  onClick: (value: string) => void;
  color?: TUiColors;
}

const MenuItem: React.FC<IMenuItemProps> = ({
  children,
  className,
  value,
  onClick,
  color = "primary",
}) => {
  const handleClick = React.useCallback(() => onClick(value), [onClick, value]);
  return (
    <div
      className={clsx(styles.root, `c_${color}`, className && className)}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

export default React.memo(MenuItem);
