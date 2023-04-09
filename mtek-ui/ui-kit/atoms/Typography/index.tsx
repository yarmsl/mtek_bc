import { clsx } from "clsx";

import { ITypographyProps } from "./types";

const Typography: React.FC<ITypographyProps> = ({
  children,
  className,
  component = "span",
  color = "text_common",
  variant = "body",
  fontWeight = 400,
  textTransform = undefined,
  ...rest
}) => {
  const TypographyTag = component;
  return (
    <TypographyTag
      className={clsx(
        `fw_${fontWeight}`,
        `c_${color}`,
        `${variant}`,
        textTransform && `tt_${textTransform}`,
        className
      )}
      {...rest}
    >
      {children}
    </TypographyTag>
  );
};

export default Typography;
