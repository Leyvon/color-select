import React from "react";
import CustomColorPicker from "./CustomColorPicker";
import "./DropdownPanel.css";

const DropdownPanel = ({ isOpen, handleClose }) => {
  return (
    <div
      className={`popover ${isOpen ? "popover_opened" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* <div className="cover" onClick={handleClose} /> */}
      <div className="panel">
        <CustomColorPicker />
      </div>
    </div>
  );
};

export default DropdownPanel;
