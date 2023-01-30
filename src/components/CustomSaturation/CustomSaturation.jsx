import { CustomPicker } from "react-color";
import "./Main/Main.css";
const { Saturation } = require("react-color/lib/components/common");

const CustomSaturation = ({ hsv, ...props }) => {
  console.dir(`ВОт такое: ${hsv.h}`);
  return (
    <div className="saturation">
      <Saturation hsv={hsv} {...props} />
    </div>
  );
};

export default CustomPicker(CustomSaturation);
