import Image from "next/image";
import { memo, useState } from "react";
import NavSlider from "../SliderLeft/NavSlider";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useDisclosure } from "@mantine/hooks";
import { clsx } from "@mantine/core";
function SliderLeft() {
  const [opend, { toggle, close }] = useDisclosure(false);

  return (
    <div
      className={clsx(
        "fixed z-[100] h-[calc(100vh-90px)] w-[70px] bg-[var(--sidebar-popup-bg)] transition-all duration-700 zm13:min-w-[240px] zm13:max-w-none zm13:bg-[var(--sidebar-bg)]",
        opend && "min-w-[240px]"
      )}
    >
      <aside className="flex h-full flex-col">
        <div className="ml-6 mt-4 h-[54px] max-w-[120px]">
          <Image
            loading="lazy"
            className={clsx(
              opend && "!visible",
              "invisible object-cover zm13:visible"
            )}
            width={120}
            height={40}
            alt="d4t-mp3"
            src={
              "https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
            }
          ></Image>
        </div>
        <NavSlider active={opend}></NavSlider>
        <div className="mb-4 mt-auto flex items-center justify-center zm13:hidden">
          <button
            onClick={toggle}
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[var(--border-box)]"
          >
            {opend ? (
              <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
            ) : (
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
            )}
          </button>
        </div>
      </aside>
    </div>
  );
}
export default memo(SliderLeft);
