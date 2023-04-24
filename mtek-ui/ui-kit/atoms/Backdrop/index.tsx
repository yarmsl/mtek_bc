"use client";

import React from "react";

import clsx from "clsx";

import Box from "@/ui-kit/atoms/Box";

import styles from "./backdrop.module.css";
import { IBoxProps } from "../Box/types";

interface IBackdropProps extends IBoxProps {
  isOpen: boolean;
  isBlackout?: boolean;
}

const Backdrop: React.FC<IBackdropProps> = ({
  isOpen,
  isBlackout,
  ...rest
}) => {
  const [isShow, setShow] = React.useState(isOpen);

  React.useEffect(() => {
    if (!isOpen) setTimeout(() => setShow(false), 250);
    else setShow(true);
  }, [isOpen]);

  React.useEffect(() => {
    const el = document.querySelector("html");
    if (el && isShow) {
      el.style.overflowY = "hidden";
    }
    if (el && !isShow && el.style.overflowY === "hidden")
      el.style.overflowY = "unset";

    return () => {
      if (el && !isShow && el.style.overflowY === "hidden")
        el.style.overflowY = "unset";
    };
  }, [isShow]);

  if (!isShow) return null;

  return (
    <Box
      className={clsx(
        styles.root,
        !isOpen && styles.close,
        isBlackout && styles.blackout,
        rest.className && rest.className
      )}
      {...rest}
    />
  );
};

export default React.memo(Backdrop);
