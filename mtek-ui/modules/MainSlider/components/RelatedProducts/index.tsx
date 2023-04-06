import Image from "next/image";

import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";
import Button from "@/ui-kit/molecules/Button";

import styles from "./relatedProducts.module.css";
import vehicleOwnersImg from "../../../../public/img/mainslider/relatedproducts.png";

const RelatedProducts: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.info}>
        <Typography
          component="h2"
          color="primary"
          variant="h2"
          fontWeight={900}
          textTransform="uppercase"
        >
          Сопутствующие товары
        </Typography>
        <Typography>
          Проектируем, производим и продёем металлические паллетные ящики,
          крепежи, молдинги.
        </Typography>
        <Box className={styles.controls}>
          <Button size="small" variant="outlined" fullWidth>
            Подробнее
          </Button>
        </Box>
      </Box>
      <Box className={styles.imageBox}>
        <Image
          className={styles.image}
          src={vehicleOwnersImg}
          alt="Сопутствующие товары"
          priority
        />
      </Box>
    </Box>
  );
};

export default RelatedProducts;
