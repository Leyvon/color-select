import { CustomPicker } from "react-color";
import "./CustomSaturation.css";
const { Saturation } = require("react-color/lib/components/common");

const CustomPointer = () => {
  return <div className="pointer" />;
};

const CustomSaturation = ({ hsv, ...props }) => {
  return (
    <div className="saturation">
      <Saturation hsv={hsv} pointer={CustomPointer} {...props} />
    </div>
  );
};

export default CustomSaturation;
