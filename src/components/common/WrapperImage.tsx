import { clsx } from "@mantine/core";
import React, { memo } from "react";

const WrapperImage = ({
  children,
  className,
  classNameWrapper,
}: {
  children: React.ReactNode;
  className?: string;
  classNameWrapper?: string;
}) => {
  return (
    <div
      className={clsx("relative overflow-hidden rounded-md", classNameWrapper)}
    >
      <figure
        className={clsx(
          className,
          "h-0 overflow-hidden bg-[var(--loading-bg)] pb-[100%] leading-[0px]"
        )}
      >
        {children}
      </figure>
    </div>
  );
};

export default memo(WrapperImage);
