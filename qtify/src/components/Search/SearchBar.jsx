import React from "react";
import styles from "./SearchBar.module.css";
import { ReactComponent as SearchIcon } from "../../assets/searchicon.svg";

const SearchBar = () => {
  return (
    <form className={styles.wrapper}>
      <div>
        <input type="text" />
      </div>
      <div>
        <button className={styles.searchButton} type="submit">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
