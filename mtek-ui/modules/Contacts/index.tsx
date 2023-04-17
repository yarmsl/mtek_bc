import React from "react";

import { formatPhoneNumber } from "@/lib/formatPhoneNumber";
import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./contacts.module.css";

interface IContactsProps {
  organization?: string;
  phone?: string;
  mail?: string;
  inn?: string;
  kpp?: string;
  address?: string;
}

const Contacts: React.FC<IContactsProps> = ({
  organization,
  phone,
  mail,
  inn,
  kpp,
  address,
}) => {
  return (
    <Box component="section" id="Контакты" className={styles.root}>
      <Typography variant="h2" fontWeight={700}>
        Контакты
      </Typography>
      <Box className={styles.contacts}>
        {organization ? (
          <Typography variant="h4">{organization}</Typography>
        ) : null}
        {phone ? (
          <Typography variant="h4">{formatPhoneNumber(phone)}</Typography>
        ) : null}
        {inn ? <Typography variant="h4">{`ИНН ${inn}`}</Typography> : null}
        {kpp ? <Typography variant="h4">{`КПП ${kpp}`}</Typography> : null}
        {mail ? <Typography variant="h4">{mail}</Typography> : null}
        {address ? <Typography variant="h4">{address}</Typography> : null}
      </Box>
    </Box>
  );
};

export default React.memo(Contacts);
