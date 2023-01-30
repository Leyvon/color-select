import React from "react";
import "./DropdownPanel.css";

const DropdownPanel = ({ component: Component, isOpen, onClose, ...props }) => {
  return (
    <div
      className={`popover ${isOpen ? "popover_opened" : ""}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="panel">
        <Component onClose={onClose} {...props} />
      </div>
    </div>
  );
};

export default DropdownPanel;
