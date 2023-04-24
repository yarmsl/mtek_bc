import React from "react";

import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./aboutItem.module.css";

const AboutItem: React.FC<IAboutItemProps> = ({ icon, title, text }) => {
  return (
    <Box shadow={3} className={styles.root}>
      <Icon className={styles.icon} size={77}>
        {icon}
      </Icon>
      <Box className={styles.info}>
        {title && (
          <Typography variant="h4" color="primary">
            {title}
          </Typography>
        )}
        <Typography variant="h4">{text}</Typography>
      </Box>
    </Box>
  );
};

export default React.memo(AboutItem);
