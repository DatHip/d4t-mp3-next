/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo } from "react";
import TopChartItem from "./components/TopChartItem";

interface IChartHomeLeft {
  data: any;
}

const ChartHomeLeft = ({ data }: IChartHomeLeft) => {
  return (
    <div className="w-full">
      <ul>
        {data.items.slice(0, 3).map((e: any, index: number) => {
          return (
            <TopChartItem
              key={e?.encodeId}
              data={e}
              index={index}
            ></TopChartItem>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(ChartHomeLeft);
