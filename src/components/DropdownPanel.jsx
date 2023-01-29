import React from "react";
import "./DropdownPanel.css";

const DropdownPanel = ({ isOpen, handleClose }) => {
  return (
    <div
      className={`popover ${isOpen ? "popover_opened" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="cover" onClick={handleClose} />
      <div className="panel">ПАНЕЛЬКА</div>
    </div>
  );
};

export default DropdownPanel;
