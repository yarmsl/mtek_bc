import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";

import ReasonIcon from "./components/ReasonIcon";
import { reasonsIconsConfig } from "./config";
import styles from "./reasonsIcons.module.css";

const ReasonsIcons: React.FC = () => {
  return (
    <Box component="section" className={styles.root}>
      <Typography fontWeight={700} variant="h2">
        Почему клиенты выбирают «М-ТЭК»
      </Typography>
      <Box className={styles.reasons}>
        {reasonsIconsConfig.map((reason, i) => (
          <Box key={i}>
            <ReasonIcon {...reason} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ReasonsIcons;
