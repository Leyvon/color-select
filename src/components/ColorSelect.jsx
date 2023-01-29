// "use strict";

import React, { useEffect, useState } from "react";
import "./ColorSelect.css";
import DropdownPanel from "./DropdownPanel";

const ColorSelect = ({
  value = "#000000",
  onChange = (value) => console.log(value),
}) => {
  const [color, setColor] = useState(value);
  const [hex, setHex] = useState(value);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleOpen = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color);
  };

  const handleUpdateHex = () => {
    setHex(color);
  };

  return (
    <div>
      <div className="color-select" onClick={handleOpen}>
        <div className="color-select__color-circle-container">
          <div
            className="color-select__color-circle"
            style={{ backgroundColor: hex }}
          />
          <span className="color-select__color-circle-text">#</span>
        </div>

        <span className="color-select__hex-code">{hex.slice(1)}</span>

        <div
          className={`color-select__label 
          ${displayColorPicker ? "up active" : "down"}
        `}
        />
        <DropdownPanel
          isOpen={displayColorPicker}
          onClose={handleClose}
          onChange={handleChange}
          color={color}
        />
      </div>
    </div>
  );
};

export default ColorSelect;
