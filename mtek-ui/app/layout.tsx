import "./globals.css";
import localFont from "@next/font/local";

import Footer from "@/modules/layouts/Footer";
import Header from "@/modules/layouts/Header";
import Box from "@/ui-kit/atoms/Box";

import styles from "./layout.module.css";

const formular = localFont({
  src: [
    {
      path: "./fonts/Formular-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Formular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Formular-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Formular-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Formular-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={formular.className}>
      <head />
      <body className={styles.root}>
        <Header />
        <Box component="main" className={styles.container}>
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  );
}
