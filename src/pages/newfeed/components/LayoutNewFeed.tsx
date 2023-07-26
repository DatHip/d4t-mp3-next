import React from "react";

interface LayoutNewFeedProps {
  children: React.ReactNode;
}

const LayoutNewFeed = ({ children }: LayoutNewFeedProps) => {
  return (
    <div>
      <div className="mb-5 flex items-center justify-center">
        <div className="mx-auto inline-flex items-center justify-between gap-2 rounded-2xl bg-[var(--alpha-bg)] p-1">
          <div className="flex cursor-pointer select-none items-center justify-center px-6 py-[5px] text-center text-xs text-[var(--navigation-text)]">
            Việt Nam
          </div>
          <div className="flex cursor-pointer select-none items-center justify-center px-6 py-[5px] text-center text-xs text-[var(--navigation-text)]">
            Việt Nam
          </div>
          <div className="flex cursor-pointer select-none items-center justify-center px-6 py-[5px] text-center text-xs text-[var(--navigation-text)]">
            Việt Nam
          </div>
          <div className="flex cursor-pointer select-none items-center justify-center px-6 py-[5px] text-center text-xs text-[var(--navigation-text)]">
            Việt Nam
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default LayoutNewFeed;
