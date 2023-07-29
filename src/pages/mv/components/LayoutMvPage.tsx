import { clsx } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { memo } from "react";

interface LayoutMvPage {
  id: string;
  children: React.ReactNode;
}

export const NavMvPageItem = ({
  active,
  to,
  title,
}: {
  title: string;
  active: boolean;
  to: string;
}) => {
  return (
    <Link
      href={to}
      className={clsx(
        "flex items-center justify-center border-b-[2px] border-transparent px-5 py-4 text-[var(--navigation-text)]",
        active &&
          "scale-105 !border-[var(--purple-primary)] !text-[var(--text-item-hover)]"
      )}
    >
      {title}
    </Link>
  );
};

const LayoutMvPage = ({ id, children }: LayoutMvPage) => {
  const { asPath } = useRouter();

  return (
    <>
      <div className="mb-8 flex items-center border-b border-[var(--border-primary)] pl-6">
        <h3 className="border-r border-[var(--border-primary)] pr-5 text-2xl font-bold">
          MV
        </h3>
        <div className="relative ml-1 flex items-center text-sm font-medium">
          <NavMvPageItem
            title="VIỆT NAM"
            active={asPath === "/mv/IWZ9Z08I"}
            to="/mv/IWZ9Z08I"
          ></NavMvPageItem>
          <NavMvPageItem
            title="US-UK"
            active={asPath === "/mv/IWZ9Z08O"}
            to="/mv/IWZ9Z08O"
          ></NavMvPageItem>
          <NavMvPageItem
            title="KPOP"
            active={asPath === "/mv/IWZ9Z08W"}
            to="/mv/IWZ9Z08W"
          ></NavMvPageItem>
          <NavMvPageItem
            title="HÒA TẤU"
            active={asPath === "/mv/IWZ9Z086"}
            to="/mv/IWZ9Z086"
          ></NavMvPageItem>
        </div>
      </div>
      {children}
    </>
  );
};

export default memo(LayoutMvPage);
