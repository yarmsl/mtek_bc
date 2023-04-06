import clsx from "clsx";

import { IBoxProps } from "./types";

const Box: React.FC<IBoxProps> = ({
  className,
  component = "div",
  shadow = undefined,
  ...rest
}) => {
  const BoxTag = component;
  return (
    <BoxTag
      className={clsx(shadow && `box_shadow_${shadow}`, className)}
      {...rest}
    />
  );
};

export default Box;
