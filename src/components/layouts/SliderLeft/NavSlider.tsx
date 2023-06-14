import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { type dataSliderLeftType , dataSliderLeft } from "@/data/dataSliderLeft";

const NavSliderItem = ({icon ,id ,title ,to} : dataSliderLeftType) => {
  const { asPath } = useRouter();
  const isActive = asPath === to;

  return (
    <Link
      className={`flex items-center justify-start gap-2 px-6 py-2 font-medium text-[var(--navigation-text)] hover:text-[var(--link-text-hover)]   ${
        isActive
          ? "!border-l-[3px] !border-solid !border-black] bg-[var(--alpha-bg)] !text-[var(--link-text-hover)] "
          : "bg-transparent"
      }`}
      href={to}
    >
      <i className={`icon ${icon}`}></i>
      <span>{title}</span>
    </Link>
  );
};

const NavSlider = () => {
  return <div className="flex flex-col gap-2 mt-5">
    {dataSliderLeft.map(item => (
      <NavSliderItem  key={item.id} icon={item.icon} to={item.to} title={item.title}></NavSliderItem>
    ))}
  </div>;
};

export default NavSlider;
