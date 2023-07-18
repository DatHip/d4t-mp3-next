import React, { memo } from "react";

const WrapperImage = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative overflow-hidden rounded-md">
      <figure
        className={`h-0 overflow-hidden bg-[var(--loading-bg)] pb-[100%] leading-[0px] ${className}`}
      >
        {children}
      </figure>
    </div>
  );
};

export default memo(WrapperImage);
