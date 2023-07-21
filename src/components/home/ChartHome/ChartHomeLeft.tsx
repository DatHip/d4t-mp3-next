/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prefer-spread */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo, useCallback, useMemo } from "react";
import TopChartItem from "./components/TopChartItem";

interface IChartHomeLeft {
  data: any;
}

const getDataRank = (arr: any) =>
  Math.max(...arr.map((item: any) => item?.counter));

const ChartHomeLeft = ({ data }: IChartHomeLeft) => {
  const dataAllChart = data?.chart?.items || [];
  const dataAllChartValueArray = Object.values(dataAllChart);
  const dataChart1 = dataAllChartValueArray[0];
  const dataChart2 = dataAllChartValueArray[1];
  const dataChart3 = dataAllChartValueArray[2];

  const totalScore = useMemo(() => {
    const rank1 = getDataRank(dataChart1);
    const rank2 = getDataRank(dataChart2);
    const rank3 = getDataRank(dataChart3);
    return rank1 + rank2 + rank3;
  }, [dataChart1, dataChart2, dataChart3]);

  const getPercentItem = useCallback(
    (dataChart: any) =>
      ((getDataRank(dataChart) * 100) / totalScore).toFixed() + "%",
    [totalScore]
  );

  return (
    <div className="w-full">
      <ul>
        {data.items.slice(0, 3).map((item: any, index: number) => {
          const percent = getPercentItem(
            index === 0 ? dataChart1 : index === 1 ? dataChart2 : dataChart3
          );

          return (
            <TopChartItem
              key={item?.encodeId}
              data={item}
              index={index}
              percent={percent}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default memo(ChartHomeLeft);
