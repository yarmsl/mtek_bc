"use client";

import React from "react";

import clsx from "clsx";

import { routes, mobileRoutes } from "@/conf/routes.conf";
import { formatPhoneNumber } from "@/lib/formatPhoneNumber";
import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Link from "@/ui-kit/atoms/Link";
import Typography from "@/ui-kit/atoms/Typography";
import {
  BurgerIcon,
  CrossIcon,
  EntranceIcon,
  LogoIcon,
  PersonIcon,
} from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";
import Drawer from "@/ui-kit/molecules/Drawer";

import styles from "./header.module.css";

interface IHeaderProps {
  isPersonalArea: boolean;
  personalAreaLink: string;
  phoneNumber: string;
}

const Header: React.FC<IHeaderProps> = ({
  isPersonalArea,
  personalAreaLink,
  phoneNumber,
}) => {
  const [isOpen, setOpen] = React.useState(false);
  const toggleOpen = React.useCallback(() => setOpen((p) => !p), []);

  return (
    <>
      <Box component="header" className={styles.wrapper}>
        <Box className={styles.root}>
          <Box className={styles.logo}>
            <Icon className={styles.logoicon} size="fullsize">
              <LogoIcon />
            </Icon>
            <Typography
              className="no_wrap select_none"
              component="h1"
              variant="h4"
              fontWeight={900}
            >
              М-ТЭК
            </Typography>
          </Box>
          <Box component="nav" className={styles.nav}>
            {routes.map(({ href, label }) => (
              <Link
                fontWeight={500}
                variant="body3"
                className="no_wrap select_none"
                key={href}
                href={href}
              >
                {label}
              </Link>
            ))}
          </Box>
          <Box className={styles.rightbox}>
            <Link className="mob" color="primary" href={`tel:${phoneNumber}`}>
              {formatPhoneNumber(phoneNumber)}
            </Link>
            {isPersonalArea && (
              <Box>
                <a
                  target="_blank"
                  href={`${personalAreaLink}`}
                  rel="noreferrer"
                >
                  <Button
                    variant="outlined"
                    icon={<PersonIcon />}
                    iconProps={{ size: 15 }}
                    size="small"
                    className="desk"
                  >
                    Личный кабинет
                  </Button>
                  <Icon className="mob" size={20}>
                    <EntranceIcon />
                  </Icon>
                </a>
              </Box>
            )}
            <Icon
              className={clsx("mob", styles.burger)}
              onClick={toggleOpen}
              color="text_common"
              size="fullsize"
            >
              {isOpen ? <CrossIcon /> : <BurgerIcon />}
            </Icon>
          </Box>
        </Box>
      </Box>
      <Drawer className="mob" isOpen={isOpen}>
        <Box className={styles.mobileNav}>
          <Link
            target="_blank"
            href={`${personalAreaLink}`}
            onClick={toggleOpen}
            rel="noreferrer"
            fontWeight={500}
          >
            Личный кабинет
          </Link>
          {mobileRoutes.map(({ href, label }, i) => (
            <Link key={i} fontWeight={500} href={href} onClick={toggleOpen}>
              {label}
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default React.memo(Header);
