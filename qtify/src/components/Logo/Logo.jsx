// eslint-disable-next-line no-unused-vars
import React from "react";
import LogoImage from "../../assets/logoimage.png";
import styles from "./Navbar.module.css";
const Logo = () => {
  return <img src={LogoImage} alt="logo" width={67} id={styles.logo} />;
};

export default Logo;
