import React from "react";

import Box from "@/ui-kit/atoms/Box";
import { HeadsetIcon, PersonIcon } from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";

import styles from "./communicationsButtons.module.css";

interface ICommunicationsButtonsProps {
  isPersonalArea: boolean;
  personalAreaLink: string;
}

const CommunicationsButtons: React.FC<ICommunicationsButtonsProps> = ({
  isPersonalArea,
  personalAreaLink,
}) => {
  return (
    <Box component="section" className={styles.root}>
      {isPersonalArea ? (
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
      ) : null}
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
