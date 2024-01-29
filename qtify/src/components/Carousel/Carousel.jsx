/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import styles from "./Carousel.module.css";
//import Swiper from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import CarouselLeftNavigation from "./CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation";

// eslint-disable-next-line react/prop-types
const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    // on evry update we should go back to initial slide
    swiper.slideTo(0, null);
  }, [data]);
  return <></>;
};

// eslint-disable-next-line react/prop-types
const Carousel = ({ data, renderComponent }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Swiper
          styles={{ padding: "0px 20px" }}
          initialSlide={0}
          modules={Navigation}
          slidesPerView="auto"
          spaceBetween={40}
          allowTouchMove
        >
          <Controls data={data} />
          <CarouselLeftNavigation />
          <CarouselRightNavigation />
          {data.map((ele) => {
            // eslint-disable-next-line react/jsx-key
            return <SwiperSlide> {renderComponent(ele)}</SwiperSlide>;
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
