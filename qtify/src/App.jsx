/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import { fetchTopAlbumsData } from "./components/api/api";

import Section from "./components/Section/Section";

const App = () => {
  const [albumsData, setAlbumsData] = useState([]);

  const generateTopAlbums = async () => {
    try {
      const data = await fetchTopAlbumsData();
      setAlbumsData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    generateTopAlbums();
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
      <Section data={albumsData} title="Top Albums" type="album" />
    </div>
  );
};

export default App;
