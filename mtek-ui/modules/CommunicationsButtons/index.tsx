import React from "react";

import Box from "@/ui-kit/atoms/Box";
import { HeadsetIcon, PersonIcon } from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";

import styles from "./communicationsButtons.module.css";

interface ICommunicationsButtonsProps {
  isPersonalArea: boolean;
  personalAreaLink: string;
  managerPhoneNumber: string;
  isMobile: boolean;
}

const CommunicationsButtons: React.FC<ICommunicationsButtonsProps> = ({
  isPersonalArea,
  personalAreaLink,
  managerPhoneNumber,
  isMobile,
}) => {
  return (
    <Box component="section" className={styles.root}>
      {isPersonalArea ? (
        <a
          href={personalAreaLink}
          target="_blank"
          className={styles.link}
          rel="noreferrer"
        >
          <Button
            icon={<PersonIcon />}
            iconAside={!isMobile}
            iconProps={{ size: "fullsize", className: styles.icon }}
            size={isMobile ? "small" : "large"}
            shadow={5}
            variant="text"
            fullWidth
            typographyProps={{ fontWeight: 400 }}
          >
            Личный кабинет
          </Button>
        </a>
      ) : null}
      <a href={`tel:${managerPhoneNumber}`}>
        <Button
          icon={<HeadsetIcon />}
          iconAside={!isMobile}
          iconProps={{ size: "fullsize", className: styles.icon }}
          size={isMobile ? "small" : "large"}
          shadow={5}
          variant="text"
          fullWidth
          typographyProps={{ fontWeight: 400 }}
        >
          Связаться с менеджером
        </Button>
      </a>
    </Box>
  );
};

export default CommunicationsButtons;
