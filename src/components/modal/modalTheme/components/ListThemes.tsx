/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { memo } from "react";

const ListThemes = (data: any) => {
  return (
    <div className="w-full">
      <div className="mb-2 text-lg font-bold">{data?.title}</div>
      <div className="flex flex-wrap items-center justify-start"></div>
    </div>
  );
};

export default memo(ListThemes);
