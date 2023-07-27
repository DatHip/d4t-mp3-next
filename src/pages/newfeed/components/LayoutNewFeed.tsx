import { clsx } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface LayoutNewFeedProps {
  children: React.ReactNode;
  id: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const LayoutNewFeed = ({
  children,
  id,
  setCurrentPage,
}: LayoutNewFeedProps) => {
  const className =
    "flex cursor-pointer select-none items-center justify-center px-6 py-[4px] text-center text-xs uppercase text-[var(--navigation-text)]";
  const active =
    "bg-[var(--tab-active-bg)] rounded-2xl shadow-md text-[var(--text-item-hover)]";

  return (
    <div>
      <div className="mb-5 flex items-center justify-center">
        <div className="mx-auto inline-flex items-center justify-between gap-2 rounded-2xl bg-[var(--alpha-bg)] p-1">
          <Link
            href={"/newfeed/IWZ9Z08I"}
            // onClick={() => setCurrentPage(() => 1)}
            className={clsx(className, id === "IWZ9Z08I" && active)}
          >
            Việt Nam
          </Link>
          <Link
            // onClick={() => setCurrentPage(() => 1)}
            href={"/newfeed/IWZ9Z08O"}
            className={clsx(className, id === "IWZ9Z08O" && active)}
          >
            us-uk
          </Link>
          <Link
            // onClick={() => setCurrentPage(() => 1)}
            href={"/newfeed/IWZ9Z08W"}
            className={clsx(className, id === "IWZ9Z08W" && active)}
          >
            K-pop
          </Link>
          <Link
            // onClick={() => setCurrentPage(() => 1)}
            href={"/newfeed/IWZ9Z08U"}
            className={clsx(className, id === "IWZ9Z08U" && active)}
          >
            hoa ngữ
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LayoutNewFeed;
