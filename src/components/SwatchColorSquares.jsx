import React from "react";
import "./SwatchColorSquares.css";

const SwatchColorSquares = ({ colorList, onClick }) => {
  return (
    <div className="swatch-square-container">
      <div className="swatch-square-button prev-btn" />
      {colorList.length && (
        <div className="swatch-square-list">
          {colorList.map((color) => (
            <div
              className="swatch-square"
              onClick={() => onClick(color)}
              key={color}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      )}
      <div className="swatch-square-button nxt-btn" />
    </div>
  );
};

export default SwatchColorSquares;
