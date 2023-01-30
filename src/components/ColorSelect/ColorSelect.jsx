import React, { useState, useRef } from "react";
import "./ColorSelect.css";
import DropdownPanel from "../DropdownPanel/DropdownPanel";
import CustomColorPicker from "../CustomColorPicker/CustomColorPicker";
import useOnClickOutside from "../../Hooks/useOnClickOutside";

const ColorSelect = ({ value = "#000000", onChange }) => {
  const [color, setColor] = useState(value);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const clickOutSideRef = useRef();
  useOnClickOutside(clickOutSideRef, () => handleClose());

  const handleOpen = () => {
    setDisplayColorPicker(true);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.hex);
    onChange(color.hex);
  };

  return (
    <div className="color-select" onClick={handleOpen} ref={clickOutSideRef}>
      <div className="color-select__color-circle-container">
        <div
          className="color-select__color-circle"
          style={{ backgroundColor: color }}
        />
        <span className="color-select__color-circle-text">#</span>
      </div>

      <span className="color-select__hex-code">{color.slice(1)}</span>

      <div
        className={`color-select__label 
          ${displayColorPicker ? "up active" : "down"}
        `}
      />
      <DropdownPanel
        component={CustomColorPicker}
        isOpen={displayColorPicker}
        onClose={handleClose}
        isClose={displayColorPicker}
        onChange={handleChange}
        color={color}
      />
    </div>
  );
};

export default ColorSelect;
