import { NavMvPageItem } from "@/pages/mv/components/LayoutMvPage";
import { useRouter } from "next/router";
import React, { memo } from "react";

interface LayoutHistoryProps {
  children: React.ReactNode;
}

const LayoutHistory = ({ children }: LayoutHistoryProps) => {
  const { asPath } = useRouter();

  return (
    <>
      <div className="mb-8 flex items-center border-b border-[var(--border-primary)] pl-6">
        <h3 className="border-r border-[var(--border-primary)] pr-5 text-2xl font-bold">
          Phát Gần Đây
        </h3>
        <div className="relative ml-1 flex items-center text-sm font-medium">
          <NavMvPageItem
            title="BÀI HÁT"
            active={asPath === "/mv/song"}
            to="/history/song"
          ></NavMvPageItem>
          <NavMvPageItem
            title="ALBUM"
            active={asPath === "/mv/album"}
            to="/history/album"
          ></NavMvPageItem>
          <NavMvPageItem
            title="MV"
            active={asPath === "/mv/mv"}
            to="/history/mv"
          ></NavMvPageItem>
        </div>
      </div>
      {children}
    </>
  );
};

export default memo(LayoutHistory);
