import React from "react";
import CustomColorPicker from "./CustomColorPicker";
import "./DropdownPanel.css";

const DropdownPanel = ({ isOpen, onClose, ...props }) => {
  return (
    <div
      className={`popover ${isOpen ? "popover_opened" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      {/* <div className="cover" onClick={onClose} /> */}
      <div className="panel">
        <CustomColorPicker onClose={onClose} {...props} />
      </div>
    </div>
  );
};

export default DropdownPanel;
