import React from "react";

import Box from "@/ui-kit/atoms/Box";
import { HeadsetIcon, PersonIcon } from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";

import styles from "./communicationsButtons.module.css";

const CommunicationsButtons: React.FC = () => {
  return (
    <Box component="section" className={styles.root}>
      <Button
        icon={<PersonIcon />}
        iconAside
        iconProps={{ size: 34 }}
        size="large"
        shadow={5}
        variant="text"
        fullWidth
        typographyProps={{ fontWeight: 400 }}
      >
        Личный кабинет
      </Button>
      <Button
        icon={<HeadsetIcon />}
        iconAside
        iconProps={{ size: 34 }}
        size="large"
        shadow={5}
        variant="text"
        fullWidth
        typographyProps={{ fontWeight: 400 }}
      >
        Связаться с менеджером
      </Button>
    </Box>
  );
};

export default CommunicationsButtons;
