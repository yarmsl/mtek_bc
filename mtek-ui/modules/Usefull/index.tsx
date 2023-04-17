import React from "react";

import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Typography from "@/ui-kit/atoms/Typography";
import { InfoIcon } from "@/ui-kit/icons";

import { usefulls } from "./conf";
import styles from "./usefull.module.css";

const Usefull: React.FC = () => {
  return (
    <Box component="section" id="Полезное" className={styles.root}>
      <Typography className={styles.title} fontWeight={700} variant="h2">
        Полезное
      </Typography>
      <Typography className={styles.subtitle} variant="h4" fontWeight={700}>
        Как измерить объём груза
      </Typography>
      <Typography>
        Для расчёта стоимости перевозки необходимо два параметра: вес груза в
        киллограмах и объём груза в кубических метрах.
        <br /> Чтобы узнать объём груза в м необходимо измерить:
        <ul>
          <li>
            <b>Длину;</b>
          </li>
          <li>
            <b>Высоту;</b>
          </li>
          <li>
            <b>Ширину груза.</b>
          </li>
        </ul>
        Затем перемножить полученные значения.
      </Typography>
      <Box className={styles.info}>
        <Icon size={45}>
          <InfoIcon />
        </Icon>
        <Box className={styles.infotext}>
          <Typography fontWeight={700}>
            Измерения производятся по крайним выступающим точкам груза.
          </Typography>
          <Typography fontWeight={700}>
            Расчёт объёба производится в кубических метрах.
          </Typography>
        </Box>
      </Box>
      <Box className={styles.ufwrapper}>
        {usefulls.map(({ formula, icon }, i) => (
          <Box className={styles.card} key={i}>
            <Box className={styles.iconbox}>{icon}</Box>
            <Typography variant="h1" fontWeight={700} color="primary">
              {formula}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default React.memo(Usefull);
