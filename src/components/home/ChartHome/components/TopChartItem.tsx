/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import InfoSongCurrent from "@/components/common/InfoSongCurrent";
import React, { memo } from "react";

const TopChartItem = ({ data, index }: any) => {
  return (
    <div className="zing_chart_item z-10 mb-2 flex w-full items-center justify-between rounded-md bg-[#ffffff12] px-4 py-[10px]">
      <div className="flex items-center justify-start gap-2">
        <div className="zing_chart-top min-w-[36px]">{index + 1}</div>
        <InfoSongCurrent data={data}></InfoSongCurrent>
      </div>
      <div></div>
    </div>
  );
};

export default memo(TopChartItem);
