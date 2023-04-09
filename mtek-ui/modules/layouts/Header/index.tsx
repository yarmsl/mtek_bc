import { routes } from "@/conf/routes.conf";
import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Link from "@/ui-kit/atoms/Link";
import Typography from "@/ui-kit/atoms/Typography";
import { LogoIcon, PersonIcon } from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";

import styles from "./header.module.css";

interface IHeaderProps {
  isPersonalArea: boolean;
  personalAreaLink: string;
}

const Header: React.FC<IHeaderProps> = ({
  isPersonalArea,
  personalAreaLink,
}) => {
  return (
    <Box component="header" className={styles.wrapper}>
      <Box className={styles.root}>
        <Box className={styles.logo}>
          <Icon size={52}>
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
        {isPersonalArea && (
          <Box>
            <a target="_blank" href={`${personalAreaLink}`} rel="noreferrer">
              <Button
                variant="outlined"
                icon={<PersonIcon />}
                iconProps={{ size: 15 }}
                size="small"
              >
                Личный кабинет
              </Button>
            </a>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
