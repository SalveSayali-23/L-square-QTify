/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/searchicon.svg";

// eslint-disable-next-line react/prop-types
const SearchBar = ({ placeholder }) => {
  return (
    <form className={styles.wrapper}>
      <div>
        <input className={styles.searchbar} placeholder={placeholder} />
      </div>
      <div>
        <button className={styles.searchButton} type="submit">
          <img src={SearchIcon} alt="Icon" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
