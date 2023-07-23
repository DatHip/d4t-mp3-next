"use client";
import React from "react";
import MainHeader from "./MainHeader";
import SliderLeft from "./SliderLeft";
import BottomMain from "./BottomMain";
import { useSelector } from "react-redux";
import { selectThemes } from "@/store/slice/theme/selector";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Props) {
  const themeBg = useSelector(selectThemes).bgImg;
  return (
    <div
      className={`relative flex h-full max-h-[100vh] min-h-[100vh] overflow-y-auto overflow-x-hidden bg-[var(--layout-bg)] bg-main bg-no-repeat `}
      style={{
        backgroundImage: `url(${themeBg ? themeBg : ""})`,
      }}
    >
      <SliderLeft></SliderLeft>
      <MainHeader></MainHeader>
      <div className="mb-[120px] ml-[70px] mt-[70px] h-full w-full overflow-x-auto zm13:ml-[240px]">
        <div className="mx-auto mt-8 max-w-[1280px] overflow-y-hidden px-4 md:px-[var(--padding-section)]">
          {children}
        </div>
      </div>
      <BottomMain></BottomMain>
    </div>
  );
}
