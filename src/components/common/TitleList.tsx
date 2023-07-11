import React from "react";

const TitleList = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={`mb-3 mt-9 text-xl font-bold capitalize text-[var(--text-primary)] ${className}`}
    >
      {children}
    </h3>
  );
};

export default TitleList;
