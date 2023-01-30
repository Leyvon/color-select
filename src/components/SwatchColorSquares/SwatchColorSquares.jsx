import React, { useRef, useEffect } from "react";
import "./SwatchColorSquares.css";

const SwatchColorSquares = ({ colorList, onClick, onClose, isClose }) => {
  const scrollRef = useRef();

  useEffect(() => {
    if (isClose) {
      scrollRef.current.scrollBy(-516, 0);
    }
  }, [isClose]);

  const handleClick = (color) => {
    onClick(color);
    onClose();
  };

  const handleScrollLeft = () => {
    scrollRef.current.scrollBy(-43, 0);
  };

  const handleScrollRight = () => {
    scrollRef.current.scrollBy(43, 0);
  };

  return (
    <div className="swatch-square-container">
      <div
        className="swatch-square-button prev-btn"
        onClick={handleScrollLeft}
      />
      <div className="swatch-square-list-cont">
        {colorList.length && (
          <div className="swatch-square-list" ref={scrollRef}>
            {colorList.map((color) => (
              <div
                className="swatch-square"
                onClick={() => handleClick(color)}
                key={color}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
      <div
        className="swatch-square-button nxt-btn"
        onClick={handleScrollRight}
      />
    </div>
  );
};

export default SwatchColorSquares;
