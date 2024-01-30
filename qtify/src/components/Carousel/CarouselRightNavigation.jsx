/* eslint-disable react-hooks/exhaustive-deps */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import RightArrow from "../../assets/rightarrow.svg";
import styles from "./Carousel.module.css";

const CarouselRightNavigation = () => {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [isEnd]);

  return (
    <div >
      {!isEnd ? (
        <button className={styles.rightNavigation}
          onClick={() => {
            swiper.slideNext();
          }}
        >
          <img src={RightArrow} />
        </button>
      ) : null}
    </div>
  );
};

export default CarouselRightNavigation;
