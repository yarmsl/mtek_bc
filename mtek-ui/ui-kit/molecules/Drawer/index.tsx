"use client";

import React from "react";

import clsx from "clsx";

import Backdrop from "@/ui-kit/atoms/Backdrop";
import Box from "@/ui-kit/atoms/Box";
import { IBoxProps } from "@/ui-kit/atoms/Box/types";

import styles from "./drawer.module.css";

interface IDrawerProps extends IBoxProps {
  onBackdropClick?: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}

const Drawer: React.FC<IDrawerProps> = ({
  onBackdropClick,
  isOpen,
  ...rest
}) => {
  const stopPropagation: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback(
      (e) => {
        e.stopPropagation();
        rest.onClick && rest.onClick(e);
      },
      [rest]
    );

  return (
    <Backdrop isBlackout isOpen={isOpen} onClick={onBackdropClick}>
      <Box
        {...rest}
        onClick={stopPropagation}
        className={clsx(
          styles.root,
          !isOpen && styles.close,
          rest.className && rest.className
        )}
      />
    </Backdrop>
  );
};

export default React.memo(Drawer);
