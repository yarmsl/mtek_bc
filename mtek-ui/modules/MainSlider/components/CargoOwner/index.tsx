import Image from "next/image";

import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";
import { Lorry3Icon, Lorry4Icon } from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";

import styles from "./cargoOwner.module.css";
import cargoOwnerImg from "../../../../public/img/mainslider/cargoowner.png";

const CargoOwner: React.FC = () => {
  return (
    <Box className={styles.root}>
      <Box className={styles.info}>
        <Typography
          component="h2"
          color="primary"
          variant="h2"
          fontWeight={900}
          textTransform="uppercase"
          className={styles.title}
        >
          Грузовладельцу
        </Typography>
        <Typography>
          Выгодные тарифы / ставки, индивидуальный подход, персональный
          менеджер, страхование груза, возможность отсрочки платежа,
          температурный режим от -20 до +20°C.
        </Typography>
        <Box className={styles.btnsbox}>
          <Button
            iconAside
            icon={<Lorry3Icon />}
            iconProps={{ size: 20, color: "primary" }}
            size="small"
            variant="outlined"
            typographyProps={{ color: "text_common", fontWeight: 400 }}
            fullWidth
          >
            До 10 тонн рефрежираторы
          </Button>
          <Button
            iconAside
            icon={<Lorry4Icon />}
            iconProps={{
              size: 20,
              color: "primary",
            }}
            size="small"
            variant="outlined"
            typographyProps={{
              color: "text_common",
              fontWeight: 400,
            }}
            fullWidth
          >
            До 20 тонн рефрежираторы и тента
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
  );
};

export default CargoOwner;
