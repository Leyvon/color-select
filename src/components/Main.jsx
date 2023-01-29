import React, { useState } from "react";
import "./Main.css";

const tinycolor = require("tinycolor2");
const { Saturation, Hue } = require("react-color/lib/components/common");

const CustomSlider = () => {
  return <div className="slider" />;
};

const CustomPointer = () => {
  return <div className="pointer" />;
};

const Main = ({ hexCode, onChange }) => {
  const color = tinycolor(hexCode);
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

  return (
    <div className="main-container">
      <div className="saturation">
        <Saturation
          hsl={hsl}
          hsv={hsv}
          pointer={CustomPointer}
          onChange={handleSaturationChange}
        />
      </div>
      <div className="hue">
        <Hue
          className="hue-vertical"
          hsl={hsl}
          pointer={CustomSlider}
          onChange={handleHueChange}
          direction={"vertical"}
        />
      </div>
    </div>
  );
};

export default Main;
