import Image from "next/image";

import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";
import Button from "@/ui-kit/molecules/Button";

// import SelectVehicle from "./components/SelectVehicle";
import styles from "./vehicleOwners.module.css";
import vehicleOwnersImg from "../../../../public/img/mainslider/vehicleowners.png";

const VehicleOwners: React.FC = () => {
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
          Собственникам автотранспорта
        </Typography>
        <Typography>
          Cвоевременная выплата, авансирование рейсов, постоянные заказы,
          компенсация ГСМ, выгодные тарифы / ставки
        </Typography>
        <Box className={styles.controls}>
          {/* <SelectVehicle /> */}
          <Button fullWidth size="small">
            Выбрать транспорт
          </Button>
        </Box>
      </Box>
      <Box className={styles.imageBox}>
        <Image
          className={styles.image}
          src={vehicleOwnersImg}
          alt="Собственникам автотранспорта"
          priority
        />
      </Box>
    </Box>
  );
};

export default VehicleOwners;
