"use client";

import React from "react";

import clsx from "clsx";

import Backdrop from "@/ui-kit/atoms/Backdrop";
import Box from "@/ui-kit/atoms/Box";
import { IBoxProps } from "@/ui-kit/atoms/Box/types";
import { TUiShadows } from "@/ui-kit/types";

import styles from "./modal.module.css";

interface IModalProps extends IBoxProps {
  onBackdropClick?: React.MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
  position?: "default" | "bottom";
  shadow?: TUiShadows;
}

const Modal: React.FC<IModalProps> = ({
  onBackdropClick,
  isOpen,
  position = "default",
  ...rest
}) => {
  const stopPropagation: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback(
      (e) => {
        e.stopPropagation();
        rest.onClick && rest.onClick(e);
      },
      [rest],
    );

  return (
    <Backdrop isBlackout isOpen={isOpen} onClick={onBackdropClick}>
      <Box
        {...rest}
        onClick={stopPropagation}
        className={clsx(
          styles.root,
          styles[position],
          !isOpen && styles.close,
          rest.className && rest.className,
        )}
      />
    </Backdrop>
  );
};

export default React.memo(Modal);
