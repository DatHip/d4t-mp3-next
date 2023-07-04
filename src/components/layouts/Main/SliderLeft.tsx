import Image from "next/image";
import { memo } from "react";
import NavSlider from "../SliderLeft/NavSlider";

function SliderLeft() {
  return (
    <aside className="relative z-[100] h-[calc(100vh-90px)] min-w-[240px] bg-[var(--sidebar-bg)]">
      <div className="ml-6 mt-4 max-w-[120px]">
        <Image
          className="object-cover"
          width={120}
          height={40}
          alt="d4t-mp3"
          src={
            "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          }
        ></Image>
      </div>
      <NavSlider></NavSlider>
    </aside>
  );
}
export default memo(SliderLeft);
