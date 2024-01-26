import React from "react";
import styles from "./SearchBar.module.css";
import SearchIcon from "../../assets/searchicon.svg";

const SearchBar = ({placeholder}) => {
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
