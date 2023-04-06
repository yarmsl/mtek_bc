import {
  BagIcon,
  BoxIcon,
  ControlsIcon,
  DocFlowIcon,
  LoyalityIcon,
  PocketIcon,
  ShieldIcon,
  SupportIcon,
} from "@/ui-kit/icons";

export const advantagesConfig: { icon: JSX.Element; title: string }[] = [
  { icon: <SupportIcon />, title: "Персональный подход" },
  { icon: <BagIcon />, title: "Гибкость и лояльность" },
  {
    icon: <LoyalityIcon />,
    title: "Ориентир на долгосрочное сотрудничество и партнёрство",
  },
  {
    icon: <PocketIcon />,
    title: "Cвоевременная оплата, отсрочка и предоплата",
  },
  { icon: <ControlsIcon />, title: "Аванс, выгодные ставки и тарифы" },
  { icon: <DocFlowIcon />, title: "Работаем с НДС и без" },
  {
    icon: <ShieldIcon />,
    title: "Мы надёжные подрядчики: оборот более 50 млн в месяц",
  },
  { icon: <BoxIcon />, title: "Страхование грузов" },
];
