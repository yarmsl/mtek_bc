import { formatPhoneNumber } from "@/lib/formatPhoneNumber";
import Box from "@/ui-kit/atoms/Box";
import Link from "@/ui-kit/atoms/Link";
import Typography from "@/ui-kit/atoms/Typography";
import Button from "@/ui-kit/molecules/Button";

import styles from "./reasonsInfo.module.css";

interface IReasonsInfoProps {
  mail: string;
  phoneNumber: string;
}

const ReasonsInfo: React.FC<IReasonsInfoProps> = ({ mail, phoneNumber }) => {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.root}>
        <Typography fontWeight={700} variant="h2">
          Почему клиенты выбирают «М-ТЭК»
        </Typography>
        <Box className={styles.info}>
          <Typography>
            <p>
              Компания «М-тэк» готова к сотрудничеству с новыми партнёрами. Мы
              обладаем собственным автопарком, но и рассматриваем сотрудничество
              со сторонними подрядчиками.
            </p>
            Наша команда: <br />
            <ul>
              <li>
                обеспечивает занятость транспорта в соответствии с графиком и
                пожеланиями владельца транспорта;
              </li>
              <li>
                все водители обладают доступом к личному кабинету и находятся на
                связи со службой поддержки;
              </li>
              <li>
                команда логистов и менеджеров закрывает все вопросы, связанные с
                документами.
              </li>
            </ul>
            Компания «М-ТЭК» стремиться к развитию и считает репутацию одним из
            важнейших факторов принятия решения в пользу того или иного
            подрядчика. Именно поэтому мы проверяем всех приглашенных к
            сотрудничеству партнеров. Для нас крайне важны ответственное
            отношение к грузам и срокам, автотранспорту и взаимодействию с
            командой.
          </Typography>
          <Typography>
            Все водители сотрудничают с нами на долгосрочной основе, прежде
            всего, потому что мы:
            <ul>
              <li>обеспечиваем постоянную занятость;</li>
              <li>выплачиваем своевременно конкурентную оплату труда;</li>
              <li>
                предлагаем систему лояльности, которая позволит больше
                зарабатывать.
              </li>
            </ul>
            Для совместной работы нам понадобится следующий список документов:
            <ul>
              <li>Свидетельство о регистрации юридического лица;</li>
              <li>Свидетельство о постановке на налоговый учёт (ИНН);</li>
              <li>Реквизиты;</li>
              <li>Паспорт (для ИП);</li>
              <li>Водительское удостоверение (для ИП);</li>
              <li>Свидетельство о регистрации ТС;</li>
              <li>Устав.</li>
            </ul>
          </Typography>
        </Box>
        <Box className={styles.bid}>
          <Button size="small" typographyProps={{ fontWeight: 400 }}>
            Оформите заявку
          </Button>
          <Typography className={styles.bidInfo}>
            Или свяжитесь с нашими менеджерами по телефону{" "}
            <Link color="primary" href={`tel:${phoneNumber}`}>
              {formatPhoneNumber(phoneNumber)}
            </Link>{" "}
            или через электронную почту{" "}
            <Link color="primary" href={`mailto:${mail}`}>
              {mail}
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ReasonsInfo;
