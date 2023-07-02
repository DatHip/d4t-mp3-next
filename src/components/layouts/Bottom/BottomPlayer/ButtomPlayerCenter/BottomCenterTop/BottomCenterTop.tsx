import ButtonNext from "./components/ButtonNext";
import ButtonPlayPause from "./components/ButtonPlayPause";
import ButtonPrevious from "./components/ButtonPrevious";
import ButtonRandom from "./components/ButtonRandom";
import ButtonRepeat from "./components/ButtonRepeat";

const BottomCenterTop = () => {
  return (
    <div className="flex items-center justify-center gap-3">
      <ButtonRandom></ButtonRandom>
      <ButtonPrevious></ButtonPrevious>
      <ButtonPlayPause></ButtonPlayPause>
      <ButtonNext></ButtonNext>
      <ButtonRepeat></ButtonRepeat>
    </div>
  );
};

export default BottomCenterTop;
