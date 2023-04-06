"use client";

import React from "react";

import { TUiColors } from "@/ui-kit/types";

import Ripple from "./Ripple";

const useRipple = (
  color: TUiColors,
  onClick?: React.MouseEventHandler
): {
  Ripple: React.NamedExoticComponent<IRippleProps>;
  rippleProps: IRippleProps;
  rippledClick: (e: React.MouseEvent) => void;
} => {
  const [coords, setCoords] = React.useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = React.useState(false);

  const rippledClick = React.useCallback(
    (e: React.MouseEvent) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      onClick && onClick(e);
    },
    [onClick]
  );

  const rippleProps: IRippleProps = React.useMemo(
    () => ({ color, isRippling, x: coords.x, y: coords.y }),
    [color, coords.x, coords.y, isRippling]
  );

  React.useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 250);
    } else setIsRippling(false);
  }, [coords.x, coords.y]);

  React.useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return { Ripple, rippleProps, rippledClick };
};

export default useRipple;
