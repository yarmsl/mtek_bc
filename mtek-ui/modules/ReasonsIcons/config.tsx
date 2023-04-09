import {
  AwardsIcon,
  BoxIcon,
  ClockIcon,
  Controls2Icon,
  MapIcon,
  NotificationsIcon,
  WarrantyIcon,
} from "@/ui-kit/icons";

export const reasonsIconsConfig: IReasonIconProps[] = [
  {
    icon: <ClockIcon />,
    title: "Экономия времени",
    description: "Не надо звонить и вести долгие переговоры",
  },
  {
    icon: <AwardsIcon />,
    title: "Надежные перевозчики",
    description: "Мы проверяем документы и выбираем лучших для сотрудничества",
  },
  {
    icon: <WarrantyIcon />,
    title: "Выгодная цена",
    description: "Исполнитель не изменит цену и условия в последний момент",
  },
  {
    icon: <Controls2Icon />,
    title: "До 90% аванс",
    description: "Аванс, выгодные ставки и тарифы",
  },
  { icon: <MapIcon />, title: "Наш менеджер всегда знает, где груз" },
  {
    icon: <BoxIcon />,
    title: "Страхование грузов",
    description:
      "Застрахуйте грузоперевозку с помощью одного из партнёров «М-ТЭК»",
  },
  {
    icon: <NotificationsIcon />,
    title: "Бесплатные уведомления",
    description:
      "Цена на перевозку грузов в SMS или по электронной почте. Бесплатно и без спама",
  },
];
