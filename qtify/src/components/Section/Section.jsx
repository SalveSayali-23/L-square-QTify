/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";
import styles from "./Section.module.css";
import { CircularProgress } from "@mui/material";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import BasicTabs from "../FilterTabs/FilterTabs";

const Section = ({ data, title, type }) => {
  // Declaring a state to handle Carousel visibility.
  const [carouselToggle, setCarouselToggle] = useState(true);
  const [filterData, setFilterData] = useState(data);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    // this will give new value(0,1,2,3,4) based on the tab change

    setValue(newValue);
    //generateSongsData(newValue)
    console.log(newValue);
  };

  const generateSongData = useCallback(
    (key) => {
      if (key === "all") {
        setFilterData(data);
      } else {
        const res = data.filter((item) => item.genre.key === key);
        setFilterData(res);
      }
    },
    [data]
  ); // Include data in the dependency array if it's used inside generateSongData

  const filteredData = type === "songs" ? filterData : data;
  console.log(filteredData);
  useEffect(() => {
    const genres = { 0: "all", 1: "rock", 2: "jazz", 3: "pop", 4: "blues" };
    if (value >= 0 && value <= 4) {
      generateSongData(genres[value]);
    }
  }, [generateSongData, value]);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse" : "Show all"}
        </h4>
      </div>
      {type === "songs" ? (
        <BasicTabs key={value} value={value} handleChange={handleChange} />
      ) : null}
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        // now we'll map all cards here
        <div className={styles.cardsWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((ele) => (
                <Card data={ele} type={type} key={ele.id} />
              ))}
            </div>
          ) : (
            // In collapse stage we'll  show carousel
            <Carousel
              data={filteredData}
              renderComponent={(data) => <Card data={data} type={type} />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
