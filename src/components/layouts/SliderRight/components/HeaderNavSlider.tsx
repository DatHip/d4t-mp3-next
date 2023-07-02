import React, { memo } from "react";
import TabsNav from "./TabsNav";
import ButtonClock from "./ButtonClock";
import ButtonRemove from "./ButtonRemove";

const HeaderNavSlider = () => {
  return (
    <div className="flex h-[70px] items-center justify-center gap-1">
      <TabsNav></TabsNav>
      <ButtonClock></ButtonClock>
      <ButtonRemove></ButtonRemove>
    </div>
  );
};

export default memo(HeaderNavSlider);
