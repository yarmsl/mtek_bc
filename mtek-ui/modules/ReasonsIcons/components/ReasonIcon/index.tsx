import React from "react";

import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./reasonIcon.module.css";

const ReasonIcon: React.FC<IReasonIconProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <Box className={styles.root}>
      <Icon className={styles.icon} size="fullsize">
        {icon}
      </Icon>
      <Box className={styles.info}>
        <Typography variant="h6" fontWeight={700} color="primary">
          {title}
        </Typography>
        {description && <Typography variant="body4">{description}</Typography>}
      </Box>
    </Box>
  );
};

export default React.memo(ReasonIcon);
