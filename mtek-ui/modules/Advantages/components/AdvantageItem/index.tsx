import React from "react";

import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./advantageItem.module.css";

interface IIAdvantageItemProps {
  icon: JSX.Element;
  title: string;
}

const AdvantageItem: React.FC<IIAdvantageItemProps> = ({ icon, title }) => {
  return (
    <Box className={styles.root}>
      <Icon size={100}>{icon}</Icon>
      <Typography fontWeight={400} className={styles.title} variant={"h4"}>
        {title}
      </Typography>
    </Box>
  );
};

export default React.memo(AdvantageItem);
