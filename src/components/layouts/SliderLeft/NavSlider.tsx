/* eslint-disable prefer-const */
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { type dataSliderLeftType, dataSliderLeft } from "@/data/dataSliderLeft";
import { clsx } from "@mantine/core";

const NavSliderItem = ({ icon, title, to }: dataSliderLeftType) => {
  const { asPath } = useRouter();
  let isActive = asPath.includes(to);

  if (to === "/") {
    isActive = asPath === to;
  }

  return (
    <Link
      className={clsx(
        "flex items-center justify-start gap-8 overflow-hidden px-6 py-2 font-medium text-[var(--navigation-text)] hover:text-[var(--link-text-hover)] zm13:gap-4",
        isActive
          ? "!border-black] !border-l-[3px] !border-solid bg-[var(--alpha-bg)] !text-[var(--link-text-hover)] "
          : "bg-transparent"
      )}
      href={to}
    >
      <i className={`icon ${icon}`}></i>
      <span>{title}</span>
    </Link>
  );
};

interface INavSlider {
  active: boolean;
}

const NavSlider = ({ active }: INavSlider) => {
  return (
    <div className="flex flex-col gap-2">
      {dataSliderLeft.map((item) => (
        <NavSliderItem
          key={item.id}
          icon={item.icon}
          to={item.to}
          title={item.title}
        ></NavSliderItem>
      ))}
    </div>
  );
};

export default NavSlider;
