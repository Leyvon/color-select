import React, { useState } from "react";
import { CustomPicker } from "react-color";
import "./CustomColorPicker.css";

import { colorList } from "../../utils/colorList";
import SwatchColorSquares from "../SwatchColorSquares/SwatchColorSquares";
import Main from "../Main/Main";

const CustomColorPicker = ({ onClose, color, onChange, isClose }) => {
  const [currentColor, setCurrentColor] = useState(color.slice(1));

  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };

  const handleSaveColor = () => {
    onChange(currentColor);
    onClose(currentColor);
  };

  return (
    <div className="color-picker">
      <SwatchColorSquares
        colorList={colorList}
        onClick={onChange}
        onClose={onClose}
        isClose={isClose}
      />

      <div className="line"></div>

      <Main color={currentColor} onChange={handleChangeColor} />

      <div className="button-bar">
        <button
          type="button"
          className="custom-button custom-button_primery"
          onClick={handleSaveColor}
        >
          OK
        </button>
        <button
          type="button"
          className="custom-button custom-button_secondary"
          onClick={onClose}
        >
          Cancel
        </button>

        <span className="hex-code">{`#${currentColor}`}</span>
        <div
          className="color-square"
          style={{ backgroundColor: `#${currentColor}` }}
        ></div>
      </div>
    </div>
  );
};

export default CustomPicker(CustomColorPicker);
