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
      className={`relative flex min-h-screen overflow-hidden bg-[var(--layout-bg)] bg-main bg-no-repeat`}
      style={{
        backgroundImage: `url(${themeBg ? themeBg : ""})`,
      }}
    >
      <SliderLeft></SliderLeft>
      <MainHeader></MainHeader>
      <div>{children}</div>
      <BottomMain></BottomMain>
    </div>
  );
}
