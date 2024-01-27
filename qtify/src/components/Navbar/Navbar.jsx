// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import SearchBar from "../Search/SearchBar";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <Logo id={styles.logo} />
      </div>

      <SearchBar placeholder="Search a album of your choice" />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default Navbar;
