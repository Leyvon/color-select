import React, { useEffect, useState } from "react";
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
  const [hsl, setHsl] = useState({
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  });
  const [prevHsl, setPrevHsl] = useState({
    h: 0,
    s: 0,
    l: 0,
    a: 0,
  });
  const [hsv, setHsv] = useState({
    h: 0,
    s: 0,
    v: 0,
    a: 0,
  });
  const [prevHsv, setPrevHsv] = useState({
    h: 0,
    s: 0,
    v: 0,
    a: 0,
  });
  const [hex, setHex] = useState("#000000");

  useEffect(() => {
    // debugger;
    const color = tinycolor(hexCode);
    setHsl(color.toHsl());
    setHsv(color.toHsv());
  }, []);

  useEffect(() => {
    // debugger;
    if (JSON.stringify(prevHsl) !== JSON.stringify(hsl)) {
      setPrevHsv(hsv);
      const color = tinycolor(hsl);
      setHex(color.toHex());
      setHsv(color.toHsv());
    }
  }, [hsl]);

  useEffect(() => {
    // debugger;
    if (JSON.stringify(prevHsv) !== JSON.stringify(hsv)) {
      const color = tinycolor(hsv);
      setHex(color.toHex());
      setHsl(color.toHsl());
    }
  }, [hsv]);

  const handleHueChange = (newHsl) => {
    console.log(`hee: ${newHsl}`);

    setPrevHsl(hsl);
    setHsl(newHsl);
  };

  const handleSaturationChange = (newHsv) => {
    const color = tinycolor(newHsv);
    const colorhsv = color.toHsv();
    console.dir(`hsv: ${colorhsv}`);
    debugger;
    setPrevHsv(hsv);
    setHsv(newHsv);
  };

  const handleColorChange = () => {
    console.log(`Сохр: ${hex}`);

    onChange(`#${hex}`);
  };

  return (
    <div className="main-container">
      <div className="saturation">
        <Saturation
          hsl={hsl}
          hsv={hsv}
          pointer={CustomPointer}
          // onChange={handleSaturationChange}
          onChange={() => console.log("")}
        />
      </div>
      <div className="hue">
        <Hue
          className="hue-vertical"
          hsl={hsl}
          pointer={CustomSlider}
          // onChange={handleHueChange}
          onChange={() => console.log("")}
          direction={"vertical"}
        />
      </div>
    </div>
  );
};

export default Main;
