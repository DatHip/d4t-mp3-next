/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import IconPlayChart from "@/asset/icons/IconPlayChart";
import Link from "next/link";
import React, { memo } from "react";
import HeaderChartHome from "./components/HeaderChartHome";
import ChartHomeLeft from "./ChartHomeLeft";
import ChartHomeRight from "./ChartHomeRight";

interface ChartHome {
  data: any;
}

const ChartHome = ({ data }: ChartHome) => {
  console.log(data);
  return (
    <div className="relative mt-12 w-full overflow-hidden rounded-lg p-5">
      <HeaderChartHome></HeaderChartHome>
      <div className="relative">
        <div className="row">
          <div className="col l-4 c-12 m-f-12 ">
            <ChartHomeLeft data={data}></ChartHomeLeft>
          </div>
          <div className="col l-8 c-12 m-f-12">
            {/* Chart */}
            <ChartHomeRight data={data}></ChartHomeRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ChartHome);
