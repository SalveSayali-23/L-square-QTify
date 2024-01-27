import React from "react";
import headphone from "../../assets/headphone.png";
import styles from "./Hero.module.css";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>
      <div>
        <img src={headphone} width={212} alt="headphone" />
      </div>
    </div>
  );
};

export default HeroSection;
