import React from "react";

import Box from "@/ui-kit/atoms/Box";

import styles from "./advantages.module.css";
import AdvantageItem from "./components/AdvantageItem";
import { advantagesConfig } from "./config";

const Advantages: React.FC = () => {
  return (
    <Box component="section" className={styles.root}>
      {advantagesConfig.map((advantage, i) => (
        <AdvantageItem key={i} {...advantage} />
      ))}
    </Box>
  );
};

export default React.memo(Advantages);
