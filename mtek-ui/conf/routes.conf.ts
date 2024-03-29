export const mobileRoutes = [
  {
    href: "#О_компании",
    label: "О компании",
  },
  {
    href: "#Грузовладельцу",
    label: "Грузовладельцу",
  },
  {
    href: "#Собственникам_автотранспорта",
    label: "Собственникам автотранспорта",
  },
  {
    href: "#Сопутствующие_товары",
    label: "Сопутствующие товары",
  },
  {
    href: "#Полезное",
    label: "Полезное",
  },
  {
    href: "#Загружаемые_файлы",
    label: "Загружаемые файлы",
  },
  {
    href: "#Контакты",
    label: "Контакты",
  },
];

export const routes = mobileRoutes.filter(
  (r) => r.label !== "Загружаемые файлы"
);
