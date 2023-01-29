import React from "react";
import { CustomPicker } from "react-color";
import "./CustomColorPicker.css";
import SwatchColorSquares from "./SwatchColorSquares";
import { colorList } from "../utils/colorList";

const CustomColorPicker = () => {
  return (
    <div className="color-picker">
      <SwatchColorSquares
        colorList={colorList}
        onClick={(color) => console.log(`${color} from SwatchColorSquares`)}
      />

      <div className="line"></div>

      <div>middle-container</div>

      <div>last-container</div>
    </div>
  );
};

export default CustomPicker(CustomColorPicker);
