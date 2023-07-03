import { memo } from "react";
import BottomPlayer from "../Bottom/BottomPlayer/BottomPlayer";

function BottomMain() {
  return (
    <>
      <div className="fixed bottom-0 z-[100] h-[91px] w-full bg-[var(--layout-bg)] ">
        <BottomPlayer></BottomPlayer>
      </div>
    </>
  );
}
export default memo(BottomMain);
