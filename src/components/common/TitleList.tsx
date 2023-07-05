import React from "react";

const TitleList = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mb-3 mt-9 text-xl font-bold capitalize text-[var(--text-primary)]">
      {children}
    </h3>
  );
};

export default TitleList;
