import Image from "next/image";

import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./deliveryBanner.module.css";
import deliverImg from "../../public/img/delivery.png";

const DeliveryBanner: React.FC = () => {
  return (
    <Box
      component="section"
      id="Собственникам_автотранспорта"
      className={styles.wrapper}
    >
      <Box className={styles.root}>
        <Box className={styles.imgBox}>
          <Image src={deliverImg} alt="Собственникам автотранспорта" />
        </Box>
        <Box className={styles.textBox}>
          <Typography
            fontWeight={900}
            color="text_contrast"
            textTransform="uppercase"
            className={styles.typography}
          >
            Перевозим продукты, товары на малотоннажном транспорте с
            рефрижераторами и без
          </Typography>
          <Typography
            fontWeight={900}
            color="text_contrast"
            textTransform="uppercase"
            className={styles.typography}
          >
            Не собираем сборные грузы: занимаемся только тем, что умеем лучше
            всего
          </Typography>
          <Typography
            fontWeight={900}
            color="text_contrast"
            textTransform="uppercase"
            className={styles.typography}
          >
            Сопровождаем сделку на всех этапах: от заправки до акта.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DeliveryBanner;
