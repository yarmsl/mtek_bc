import Image from "next/image";

import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";
import Button from "@/ui-kit/molecules/Button";

import styles from "./vehicleOwner.module.css";
import cargoOwnerImg from "../../public/img/vehicleowner.png";

const CargoOwner: React.FC = () => {
  return (
    <Box className={styles.wrapper} component="section" id="Грузовладельцу">
      <Box className={styles.root}>
        <Box className={styles.info}>
          <Typography variant="h2">Грузовладельцу</Typography>
          <Box className={styles.imageBoxMob}>
            <Image
              className={styles.image}
              src={cargoOwnerImg}
              alt="Грузовладельцу"
              priority
            />
          </Box>
          <Typography>
            Наша компания выполняет грузоперевозки по Российской Федерации. В
            нашем автопарке собственные грузовые автомобили грузоподъемностью до
            20 тонн, а также огромны пул проверенных грузоперевозчиков. Мы
            работаем по системе электронного документооборота, страхуем груз и
            полностью обеспечиваем его безопасность. Свяжитесь с нами для
            просчета вашей доставки.
          </Typography>
          <Box className={styles.btnBox}>
            <Button typographyProps={{ fontWeight: 400 }} size="small">
              Рассчитать доставку
            </Button>
          </Box>
        </Box>

        <Box className={styles.imageBox}>
          <Image
            className={styles.image}
            src={cargoOwnerImg}
            alt="Грузовладельцу"
            priority
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CargoOwner;
