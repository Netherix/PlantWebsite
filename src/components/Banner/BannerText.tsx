import React from "react";
import "./Banner.css";
import ShopNowButton from "./ShopNowButton";

interface BannerTextProps {
  text: string;
}

const BannerText: React.FC<BannerTextProps> = ({ text }) => {
  return (
    <div className="banner-text">
      <h1>{text}</h1>
      <ShopNowButton />
    </div>
  );
};

export default BannerText;
