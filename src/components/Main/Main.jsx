import React, { useState } from "react";
import "./Main.css";
import CustomSaturation from "../CustomSaturation/CustomSaturation";
import CustomHue from "../CustomHue/CustomHue";

const tinycolor = require("tinycolor2");

const Main = ({ color: hex, onChange }) => {
  const color = tinycolor(hex);
  const [hsl, setHsl] = useState(color.toHsl());
  const [hsv, setHsv] = useState(color.toHsv());

  const handleHueChange = (hsl) => {
    setHsl(hsl);
    const color = tinycolor(hsl);
    onChange(color.toHex());
  };
  const handleSaturationChange = (hsv) => {
    setHsv(hsv);
    const color = tinycolor(hsv);
    onChange(color.toHex());
  };

  // const handleHueChange = (color) => {
  //   setHsl(color.hsl);
  //   onChange(color.hex.slice(1));
  // };

  // const handleSaturationChange = (color) => {
  //   setHsv(color.hsv);
  //   onChange(color.hex.slice(1));
  // };

  return (
    <div className="main-container">
      <CustomSaturation hsl={hsl} hsv={hsv} onChange={handleSaturationChange} />

      <CustomHue hsl={hsl} onChange={handleHueChange} direction={"vertical"} />
    </div>
  );
};

export default Main;
