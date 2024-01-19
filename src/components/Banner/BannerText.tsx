import React from "react";
import "./Banner.css";

interface BannerTextProps {
  text: string;
}

const BannerText: React.FC<BannerTextProps> = ({ text }) => {
  const indexOfAmazing = text.toLowerCase().indexOf("amazing");

  const firstPart = text.substring(0, indexOfAmazing + "amazing".length);
  const secondPart = text.substring(indexOfAmazing + "amazing".length);

  return (
    <div className="banner-text">
      <h1>{firstPart}<br />{secondPart}</h1>
    </div>
  );
};

export default BannerText;
