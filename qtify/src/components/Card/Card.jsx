// eslint-disable-next-line no-unused-vars
import React from "react";
import { Chip, Tooltip } from "@mui/material";
import styles from "./Card.module.css";

const Card = ({ data, type }) => {
  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { image, follows, title, songs } = data;
        return (
          <Tooltip title={`${songs.length} songs`} placement="top" arrow>
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="album" />
                <div className={styles.banner}>
                  <Chip
                    label={`${follows} Follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
            </div>
            {/* since title of album card is separte and not the part of the card,created separate div for tat */}
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
          </Tooltip>
        );
      } case "songs": {
        const { image, likes, title } = data;
        return (
          
            <div className={styles.wrapper}>
              <div className={styles.card}>
                <img src={image} alt="song" loading="lazy"/>
                <div className={styles.banner}>
                  <Chip
                    label={`${likes} Likes`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
            
           
            <div className={styles.titleWrapper}>
              <p>{title}</p>
            </div>
            </div> 
        );
      }
      default:
        return <></>;
    }
  };
  return getCard(type);
};

export default Card;
