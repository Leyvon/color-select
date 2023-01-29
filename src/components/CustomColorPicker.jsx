import React, { useEffect, useState } from "react";
import { CustomPicker } from "react-color";
import "./CustomColorPicker.css";

import { colorList } from "../utils/colorList";
import SwatchColorSquares from "./SwatchColorSquares";
import ButtonBar from "./ButtonBar";

const CustomColorPicker = ({ onClose, color, onChange }) => {
  const [hex, setHex] = useState(color);

  return (
    <div className="color-picker">
      <SwatchColorSquares
        colorList={colorList}
        onClick={(color) => console.log(`${color} from SwatchColorSquares`)}
      />

      <div className="line"></div>

      <div>middle-container</div>

      <ButtonBar onClose={onClose} hex={hex} />
    </div>
  );
};

export default CustomPicker(CustomColorPicker);
