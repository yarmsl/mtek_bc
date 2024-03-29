import {
  DefenseIcon,
  FlagIcon,
  LorryIcon,
  PersonalSupportIcon,
} from "@/ui-kit/icons";

export const aboutItemsConfig: IAboutItemProps[] = [
  {
    icon: <FlagIcon />,
    title: "Компания «М-ТЭК» работает с 2017 года",
    text: "",
  },
  {
    icon: <PersonalSupportIcon />,
    text: "Над вашим грузом будет работать команда экспертов отрасли: личный менеджер 24/7, бухгалтерия, инженеры, логисты, it, операторы службы поддержки 24/7",
  },
  {
    icon: <DefenseIcon />,
    text: "Мы работаем со всем, что необходимо для организации грузоперевозок как для перевозчика, так и для грузоотправителя: от поиска груза до печати в акте выполненных работ.",
  },
  {
    icon: <LorryIcon />,
    text: "Направление, связанное с грузоперевозчиками «М-тэк», управляет собственным парком транспортных средств, а также производит системы для хранения и перевозки грузов. Именно поэтому мы можем гарантировать безопасность грузов.",
  },
];
