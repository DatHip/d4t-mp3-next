import { memo } from "react";

interface BoxHoverProps {
  children?: React.ReactNode;
  childrenHover: React.ReactNode;
  className?: string;
  classNameHover?: string;
  onClick?: () => void;
}

const BoxHover: React.FC<BoxHoverProps> = ({
  children,
  childrenHover,
  className,
  classNameHover,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg transition-all ${className}`}
    >
      {children}

      <div
        className={`absolute z-10 hidden items-center justify-center bg-[rgba(0,0,0,0.4)] group-hover:flex ${classNameHover} bottom-0 left-0 right-0 top-0 `}
      >
        {childrenHover}
      </div>
    </div>
  );
};

export default memo(BoxHover);
