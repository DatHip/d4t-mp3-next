/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import TitleList from "@/components/common/TitleList";
import React from "react";
import { useState } from "react";
import ListItemNewRelease from "./ListItemNewRelease";

enum ACTIVE {
  ALL,
  OTHER,
  VIE,
}

const NewRelease = ({ data }: any) => {
  const [isActive, setActive] = useState<ACTIVE>(ACTIVE.ALL);

  const selectData =
    isActive === ACTIVE.ALL
      ? data?.items.all
      : isActive === ACTIVE.VIE
      ? data?.items.vPop
      : data?.items.others;

  return (
    <div>
      <TitleList>{data?.title}</TitleList>
      <div className="flex items-start justify-start gap-4">
        <FilterButton
          isActive={isActive === ACTIVE.ALL}
          onClick={() => setActive(ACTIVE.ALL)}
        >
          tất cả
        </FilterButton>
        <FilterButton
          isActive={isActive === ACTIVE.VIE}
          onClick={() => setActive(ACTIVE.VIE)}
        >
          Việt Nam
        </FilterButton>
        <FilterButton
          isActive={isActive === ACTIVE.OTHER}
          onClick={() => setActive(ACTIVE.OTHER)}
        >
          Quốc Tế
        </FilterButton>
      </div>
      <ListItemNewRelease data={selectData}></ListItemNewRelease>
    </div>
  );
};

export default React.memo(NewRelease);

interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  isActive,
  onClick,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border-[1px] border-solid px-6 py-1 text-xs font-normal uppercase hover:brightness-90 ${
        isActive
          ? "border-[var(--purple-primary)] bg-[var(--purple-primary)] text-white"
          : "border-[var(--border-primary)]"
      }`}
    >
      {children}
    </button>
  );
};
