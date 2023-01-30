import { CustomPicker } from "react-color";
import "./CustomHue.css";
const { Hue } = require("react-color/lib/components/common");

const CustomSlider = () => {
  return <div className="slider" />;
};

const CustomHue = ({ ...props }) => {
  return (
    <div className="hue">
      <Hue className="hue-vertical" pointer={CustomSlider} {...props} />
    </div>
  );
};

export default CustomHue;
