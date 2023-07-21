/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import LinkToAll from "@/components/common/LinkToAll";
import TitleList from "@/components/common/TitleList";
import React, { memo } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import ItemRadio from "./components/ItemRadio";

interface IWeekChartHome {
  data: any;
}

const RadioHome = ({ data }: IWeekChartHome) => {
  return (
    <LazyLoadComponent threshold={30}>
      <div className="mb-4 mt-9 flex items-center justify-between">
        <TitleList className="!my-0">{data?.title}</TitleList>
        {data?.link && <LinkToAll href={data?.link}></LinkToAll>}
      </div>
      <div className="row flex-nowrap overflow-x-auto">
        {data?.items?.slice(0, 6).map((e: any) => {
          return <ItemRadio data={e} key={e?.id}></ItemRadio>;
        })}
      </div>
    </LazyLoadComponent>
  );
};

export default memo(RadioHome);
