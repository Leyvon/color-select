import React from "react";
import "./ButtonBar.css";

const ButtonBar = ({ onClose, hex }) => {
  return (
    <div className="button-bar">
      <button
        type="button"
        className="custom-button custom-button_ok"
        onClick={onClose}
      >
        OK
      </button>
      <button
        type="button"
        className="custom-button custom-button_cancel"
        onClick={onClose}
      >
        Cancel
      </button>

      <span className="hex-code">{hex}</span>
      <div className="color-square" style={{ backgroundColor: hex }}></div>
    </div>
  );
};

export default ButtonBar;
