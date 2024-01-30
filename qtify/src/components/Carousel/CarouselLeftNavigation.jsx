// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import LeftArrow from "../../assets/leftarrow.svg";
import styles from "./Carousel.module.css";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);
  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBeginning]);

  return (
    <div >
      {!isBeginning ? (
        <button className={styles.leftNavigation}
          
          onClick={() => {
            swiper.slidePrev();
          }}
        >
          <img src={LeftArrow} />
        </button>
      ) : null}
    </div>
  );
};

export default CarouselLeftNavigation;
