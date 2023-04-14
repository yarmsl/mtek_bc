"use client";
import React from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import { SERVER_URL } from "@/lib/constants";
import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Typography from "@/ui-kit/atoms/Typography";
import { CheckRoundedIcon } from "@/ui-kit/icons";
import Button from "@/ui-kit/molecules/Button";

import styles from "./relatedProducts.module.css";
import rp0 from "../../public/img/relatedproducts/t1.png";
import rp1 from "../../public/img/relatedproducts/t2.png";
import rp2 from "../../public/img/relatedproducts/t4.png";
import rp3 from "../../public/img/relatedproducts/t5.png";
import rp4 from "../../public/img/relatedproducts/t6.png";

const products = [rp0, rp1, rp2, rp3, rp4, rp0, rp1, rp2, rp3, rp4];

const RelatedProducts: React.FC = () => {
  return (
    <Box
      component="section"
      id="Сопутствующие_товары"
      className={styles.wrapper}
    >
      <Box className={styles.root}>
        <Typography fontWeight={700} variant="h2">
          Сопутствующие товары
        </Typography>
        <Swiper className={styles.slider} slidesPerView={5} loop>
          {products.map((src, i) => (
            <SwiperSlide className={styles.slide} key={i}>
              <Image src={src} alt="Сопутствующий товар" />
            </SwiperSlide>
          ))}
        </Swiper>
        <Box className={styles.parts}>
          <Typography color="primary" fontWeight={700} variant="h2">
            Мы можем изготовить запасные части по вашим размерам
          </Typography>
          {["Собственное производство", "Собственные конструкторы"].map(
            (title, i) => (
              <Box className={styles.benefit} key={i}>
                <Icon size={64}>
                  <CheckRoundedIcon />
                </Icon>
                <Typography variant="h4">{title}</Typography>
              </Box>
            )
          )}
        </Box>
        <Box className={styles.download}>
          <Typography variant="h4">
            Скачайте перечень запасных частей
          </Typography>
          <a href={`${SERVER_URL}/api/files/partsList`}>
            <Button typographyProps={{ fontWeight: 400, variant: "body2" }}>
              Скачать
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default React.memo(RelatedProducts);
