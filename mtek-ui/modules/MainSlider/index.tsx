"use client";

import React from "react";

import { Autoplay, EffectFade, Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Box from "@/ui-kit/atoms/Box";
import Icon from "@/ui-kit/atoms/Icon";
import Typography from "@/ui-kit/atoms/Typography";
import { MouseIcon } from "@/ui-kit/icons";

import CargoOwner from "./components/CargoOwner";
import RelatedProducts from "./components/RelatedProducts";
import VehicleOwners from "./components/VehicleOwners";
import styles from "./mainSlider.module.css";

const MainSlider: React.FC = () => {
  const [isMW, setMW] = React.useState(true);
  const toggleMW = React.useCallback(() => setMW((p) => !p), []);

  return (
    <Box component="section" className={styles.root}>
      <Box className={styles.contacts}>
        <Typography color="primary" fontWeight={900} variant="h4">
          +7 (963) 080-07-66
        </Typography>
        <Typography variant="body2">
          г. Челябинск, ул. Тарасова, д. 38 офис 7
        </Typography>
      </Box>
      <Swiper
        key={`mousewheel-${isMW}`}
        className={styles.slider}
        effect="fade"
        initialSlide={0}
        modules={[Autoplay, Pagination, EffectFade, Mousewheel]}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        mousewheel={isMW ? { releaseOnEdges: true } : { forceToAxis: true }}
      >
        <SwiperSlide>
          <VehicleOwners />
        </SwiperSlide>
        <SwiperSlide>
          <CargoOwner />
        </SwiperSlide>
        <SwiperSlide>
          <RelatedProducts />
        </SwiperSlide>
      </Swiper>
      <Box className={styles.mouseIconBox}>
        <Icon
          className={styles.mouseIcon}
          color={isMW ? "primary" : "grey_4"}
          onClick={toggleMW}
        >
          <MouseIcon />
        </Icon>
      </Box>
    </Box>
  );
};

export default React.memo(MainSlider);
