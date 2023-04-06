import { routes } from "@/conf/routes.conf";
import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Link from "@/ui-kit/atoms/Link";
import Typography from "@/ui-kit/atoms/Typography";
import { LogoIcon } from "@/ui-kit/icons";

import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <Box component="footer" className={styles.wrapper}>
      <Box className={styles.root}>
        <Box className={styles.logo}>
          <Icon size={28}>
            <LogoIcon />
          </Icon>
          <Typography
            className="no_wrap select_none"
            component="h6"
            variant="body2"
            fontWeight={900}
          >
            М-ТЭК
          </Typography>
        </Box>
        <Box component="nav" className={styles.nav}>
          {routes.map(({ href, label }) => (
            <Link
              color="grey_4"
              className="no_wrap select_none"
              key={href}
              href={href}
              variant="body2"
            >
              {label}
            </Link>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
