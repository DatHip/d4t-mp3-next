import React from "react";
import ButtonMV from "./components/ButtonMV";
import ButtonKaraoke from "./components/ButtonKaraoke";
import ButtonToggleRight from "./components/ButtonToggleRight";
import BoxVolume from "./components/BoxVolume";

const BottomPlayerRight = () => {
  return (
    <div className="flex w-[30%] items-center justify-end gap-3">
      <ButtonMV></ButtonMV>
      <ButtonKaraoke></ButtonKaraoke>
      <BoxVolume></BoxVolume>
      <div className="h-8 w-[1px] bg-[var(--border-player)]"></div>
      <ButtonToggleRight></ButtonToggleRight>
    </div>
  );
};

export default BottomPlayerRight;
