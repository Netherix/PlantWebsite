import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import BannerImage from "../../components/Banner/BannerImage";
import BannerText from "../../components/Banner/BannerText";
import ShopNowButton from "../../components/Banner/ShopNowButton";


const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerImage />
      <BannerText text="Discover our amazing plant collection!" />
      <ShopNowButton />
    </div>
  );
};

export default Home;
