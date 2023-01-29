import React from "react";
import { CustomPicker } from "react-color";
import "./CustomColorPicker.css";

const CustomColorPicker = () => {
  return (
    <div className="color-picker">
      <div>container-swatch-square</div>

      <div className="line"></div>

      <div>middle-container</div>

      <div>last-container</div>
    </div>
  );
};

export default CustomPicker(CustomColorPicker);
