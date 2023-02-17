import React from "react";

import { clsx } from "clsx";

import styles from "./ripple.module.css";

const Ripple: React.FC<IRippleProps> = ({
  children,
  color,
  isRippling = false,
  x,
  y,
}) => {
  if (!isRippling) return <>{children}</>;
  return (
    <>
      <span
        className={clsx(styles.ripple, `bg_${color}`)}
        style={{
          left: x,
          top: y,
        }}
      />
      <div className={styles.content}>{children}</div>
    </>
  );
};

export default React.memo(Ripple);
