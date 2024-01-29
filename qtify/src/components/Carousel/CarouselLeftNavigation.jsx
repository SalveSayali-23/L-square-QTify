// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import LeftArrow from "../../assets/leftarrow.svg";

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
    <div>
      {!isBeginning ?(
        <LeftArrow
          onClick={() => {
            swiper.slidePrev();
          }}
        />
      ): null}
    </div>
  );
};

export default CarouselLeftNavigation;
