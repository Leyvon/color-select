import { CustomPicker } from "react-color";
import "./Main/Main.css";
const { Hue } = require("react-color/lib/components/common");

const CustomHue = ({ ...props }) => {
  return (
    <div className="hue">
      <Hue className="hue-vertical" {...props} />
    </div>
  );
};

export default CustomPicker(CustomHue);
