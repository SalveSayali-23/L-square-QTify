/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
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

  const generateSongsData = (value) => {
    let key;
    if (value === 0) {
      setFilterData(data);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else {
      key = "blues";
    }
    const res = data.filter((item) => item.genre.key === key);
    setFilterData(res);
    console.log(res);
  };
  const filteredData = type === "songs" ? filterData : data;
  // console.log(filteredData);
  console.log(filterData);

  useEffect(() => {
    generateSongsData(value);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggle ? "Collapse" : "Show all"}
        </h4>
      </div>
      {type === "songs" ? (
        <BasicTabs value={value} handleChange={handleChange} />
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
