import React, { useState } from "react";
import "./Main.css";
import CustomSaturation from "../CustomSaturation";
import CustomHue from "../CustomHue";

const tinycolor = require("tinycolor2");
// const { Saturation, Hue } = require("react-color/lib/components/common");

const CustomSlider = () => {
  return <div className="slider" />;
};

const CustomPointer = () => {
  return <div className="pointer" />;
};

const Main = ({ color: hex, onChange }) => {
  const color = tinycolor(hex);
  const [hsl, setHsl] = useState(color.toHsl());
  const [hsv, setHsv] = useState(color.toHsv());

  // const handleHueChange = (hsl) => {
  //   setHsl(hsl);
  //   const color = tinycolor(hsl);
  //   onChange(color.toHex());
  // };

  const handleHueChange = (color) => {
    setHsl(color.hsl);
    onChange(color.hex.slice(1));
  };

  const handleSaturationChange = (color) => {
    console.log(color.hsv);
    console.log(hsv);
    setHsv(color.hsv);
    onChange(color.hex.slice(1));
  };

  return (
    <div className="main-container">
      {/* <div className="saturation">
        <Saturation
          hsl={hsl}
          hsv={hsv}
          pointer={CustomPointer}
          onChange={handleSaturationChange}
        />
      </div> */}

      <CustomSaturation
        hsl={hsl}
        hsv={hsv}
        pointer={CustomPointer}
        onChange={handleSaturationChange}
      />

      {/* <div className="hue">
        <Hue
          className="hue-vertical"
          hsl={hsl}
          pointer={CustomSlider}
          onChange={handleHueChange}
          direction={"vertical"}
        />
      </div> */}

      <CustomHue
        hsl={hsl}
        pointer={CustomSlider}
        onChange={handleHueChange}
        direction={"vertical"}
      />
    </div>
  );
};

export default Main;
