import Box from "@/ui-kit/atoms/Box";

import styles from "./map.module.css";

const Map: React.FC = () => {
  return (
    <Box className={styles.root}>
      <a href="https://yandex.ru/maps/56/chelyabinsk/?utm_medium=mapframe&utm_source=maps">
        Челябинск
      </a>
      <a href="https://yandex.ru/maps/56/chelyabinsk/house/ulitsa_tarasova_38/YkgYdQ9iQUMEQFtvfX1yeH9nYA==/?ll=61.385034%2C55.139342&utm_medium=mapframe&utm_source=maps&z=16.95">
        Улица Тарасова, 38 — Яндекс Карты
      </a>
      <iframe
        src="https://yandex.ru/map-widget/v1/?ll=61.385034%2C55.139342&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjA0NzQ4MRJB0KDQvtGB0YHQuNGPLCDQp9C10LvRj9Cx0LjQvdGB0LosINGD0LvQuNGG0LAg0KLQsNGA0LDRgdC-0LLQsCwgMzgiCg0MiHVCFbCOXEI%2C&z=16.95"
        width="100%"
        height="100%"
        frameBorder="1"
        allowFullScreen
      ></iframe>
    </Box>
  );
};

export default Map;
