"use client";

import React from "react";

import clsx from "clsx";

import Backdrop from "@/ui-kit/atoms/Backdrop";
import { TUiColors } from "@/ui-kit/types";

import styles from "./menu.module.css";

interface IMenuProps {
  children: React.ReactNode;
  onBackdropClick?: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
  menuData?: DOMRect;
  isBlackout?: boolean;
  color?: TUiColors;
}

const Menu: React.FC<IMenuProps> = ({
  children,
  isOpen,
  onBackdropClick,
  menuData = { width: 300, top: 500, left: 300, height: 50 },
  isBlackout,
  color = "primary",
}) => {
  const { top, left, width, height } = menuData;
  const stopPropagation: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback((e) => {
      e.stopPropagation();
    }, []);
  return (
    <Backdrop onClick={onBackdropClick} isOpen={isOpen} isBlackout={isBlackout}>
      <div
        onClick={stopPropagation}
        className={clsx(styles.root, `bc_${color}`)}
        style={{ top, left, width }}
      >
        <div className={styles.titleItem} style={{ height: height - 7 }} />
        <div className={styles.ph} />

        {children}
        <div className={styles.ph} />
      </div>
    </Backdrop>
  );
};

export default React.memo(Menu);
