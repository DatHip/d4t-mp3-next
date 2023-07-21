/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo } from "react";
import HeaderChartHome from "./components/HeaderChartHome";
import ChartHomeLeft from "./ChartHomeLeft";
import ChartHomeRight from "./ChartHomeRight";
import { LazyLoadComponent } from "react-lazy-load-image-component";

interface ChartHome {
  data: any;
}

const ChartHome = ({ data }: ChartHome) => {
  return (
    <LazyLoadComponent threshold={300}>
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
    </LazyLoadComponent>
  );
};

export default memo(ChartHome);
