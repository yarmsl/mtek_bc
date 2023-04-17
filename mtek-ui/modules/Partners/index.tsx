import Image from "next/image";

import Box from "@/ui-kit/atoms/Box";
import Typography from "@/ui-kit/atoms/Typography";

import styles from "./partners.module.css";
import AkbarsLogo from "../../public/img/partners/akbars.png";
import AlisLogo from "../../public/img/partners/alis.png";
import AmigoLogo from "../../public/img/partners/amigo.png";
import ChelindbankLogo from "../../public/img/partners/chelindbank.png";
import CvetochkaLogo from "../../public/img/partners/cvetochka.png";
import KbLogo from "../../public/img/partners/kb.png";
import SberLogo from "../../public/img/partners/sber.png";
import SparLogo from "../../public/img/partners/spar.png";
import TochkaLogo from "../../public/img/partners/tochka.png";
import TraktorLogo from "../../public/img/partners/traktor.png";
import YandexLogo from "../../public/img/partners/yandex.png";

const partners = [
  { title: "Трактор", src: TraktorLogo },
  { title: "Сбер", src: SberLogo },
  { title: "Амиго Медиа", src: AmigoLogo },
  { title: "Яндекс", src: YandexLogo },
  { title: "Челиндбанк", src: ChelindbankLogo },
  { title: "Spar", src: SparLogo },
  { title: "Точка", src: TochkaLogo },
  { title: "Красное&Белое", src: KbLogo },
  { title: "Элис", src: AlisLogo },
  { title: "ЦВЕточка", src: CvetochkaLogo },
  { title: "АК Барс Банк", src: AkbarsLogo },
];

const Partners: React.FC = () => {
  return (
    <Box component="section" className={styles.root}>
      <Typography fontWeight={700} variant="h2">
        Партнёры
      </Typography>
      <Box className={styles.partners}>
        {partners.map(({ title, src }, i) => (
          <Box key={i}>
            <Image alt={title} src={src} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Partners;
