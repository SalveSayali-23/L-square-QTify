/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import {
  fetchTopAlbumsData,
  fetchNewAlbumsData,
  fetchSongsData
} from "./components/api/api";
import Section from "./components/Section/Section";

import styles from "./App.module.css";

const App = () => {
  const [albumsData, setAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [songsData, setSongsData] = useState([]);
  


  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbumsData();
      setAlbumsData(data);
    } catch (e) {
      console.log(e);
    }
  };

  const generateNewAlbums = async () => {
    try {
      const data = await fetchNewAlbumsData();
      setNewAlbumsData(data);
    } catch (e) {
      console.log(e);
    }
  };
  const generateSongs = async () => {
    try {
      const data = await fetchSongsData();
      setSongsData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    generateTopAlbums();
    generateNewAlbums();
    generateSongs();
  }, []);

  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* {
      albumsData.map((topAlbum) => (
        <Card data={topAlbum} type="album" key={topAlbum.id} />
      ))
      }  */}
      {/* instead of mappibg card data for every section, lets create a section component and render it directly here */}
      <div className={styles.sectionWrapper}>
        <Section data={albumsData} title="Top Albums" type="album" />
        <Section data={newAlbumsData} title="New Albums" type="album" />
       <hr  style={{ margin: '2.5rem 0', border: '1px solid rgba(52, 201, 75, 1)' }}/>
        <Section data={songsData} title="Songs" type="songs" />
      </div>
      
    </div>
  );
};

export default App;
