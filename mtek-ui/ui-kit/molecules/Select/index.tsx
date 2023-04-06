"use client";

import React from "react";

import styles from "./select.module.css";
import { ISelectProps } from "./types";
import Input from "../Input";
import Menu from "../Menu";

const Select: React.FC<ISelectProps> = ({
  children,
  color,
  size,
  icon,
  inputProps,
  value,
  placeholder,
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [isOpen, setOpen] = React.useState(false);
  const [menuData, setMenuData] = React.useState<DOMRect | undefined>(
    undefined
  );

  const handleClick: React.MouseEventHandler<HTMLDivElement> =
    React.useCallback((e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMenuData(rect);
      setOpen(true);
    }, []);

  const handleClose = React.useCallback(() => setOpen(false), []);

  const handleResize = React.useCallback(() => {
    const rect = inputRef.current?.getBoundingClientRect();
    if (rect) setMenuData(rect);
  }, []);

  React.useEffect(() => {
    if (inputRef && inputRef.current) {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <Input
        color={color}
        size={size}
        icon={icon}
        {...inputProps}
        onWrapperClick={handleClick}
        className={styles.input}
        placeholder={placeholder}
        defaultValue={value}
        ref={inputRef}
      />
      <Menu
        isOpen={isOpen}
        menuData={menuData}
        onBackdropClick={handleClose}
        isBlackout={false}
      >
        {children}
      </Menu>
    </>
  );
};

export default React.memo(Select);
