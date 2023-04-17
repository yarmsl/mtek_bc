import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./about.module.css";
import AboutItem from "./components/AboutItem";
import { aboutItemsConfig } from "./config";

const About: React.FC = () => {
  return (
    <Box component="section" id="О_компании" className={styles.root}>
      <Typography fontWeight={700} variant="h2">
        О компании
      </Typography>
      <Box className={styles.abouts}>
        {aboutItemsConfig.map((about, i) => (
          <AboutItem key={i} {...about} />
        ))}
      </Box>
    </Box>
  );
};

export default About;
