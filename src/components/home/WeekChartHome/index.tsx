/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Image from "next/image";
import React, { memo } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

interface IWeekChartHome {
  data: any;
}

const WeekChartHome: React.FC<IWeekChartHome> = ({ data }) => {
  console.log(data);
  return (
    <LazyLoadComponent threshold={30}>
      <div className="row mt-9 overflow-x-auto">
        {data?.items.map((e: any) => {
          return (
            <div key={e.link} className="col l-4 m-f-4 c-5">
              <div className="group overflow-hidden rounded-md">
                <Image
                  className="h-full max-w-full transition-transform duration-700 group-hover:scale-110"
                  width={300}
                  height={100}
                  alt={e.country}
                  src={e.cover}
                ></Image>
              </div>
            </div>
          );
        })}
      </div>
    </LazyLoadComponent>
  );
};

export default memo(WeekChartHome);