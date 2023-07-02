import ButtonVolume from "./ButtonVolume";
import RangeVolume from "./RangeVolume";

const BoxVolume = () => {
  return (
    <div className="flex items-center gap-2">
      <ButtonVolume></ButtonVolume>
      <RangeVolume></RangeVolume>
    </div>
  );
};

export default BoxVolume;
