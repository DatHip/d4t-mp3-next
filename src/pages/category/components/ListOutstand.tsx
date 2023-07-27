/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import TitleList from "@/components/common/TitleList";
import React, { memo } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import ItemOutstand from "./ItemOutstand";

interface ListOutstandProps {
  data: any;
  title: string;
}

const ListOutstand = ({ data, title }: ListOutstandProps) => {
  return (
    <LazyLoadComponent threshold={30}>
      <div className="mb-3 mt-9 flex items-center justify-between">
        <TitleList className="!my-0">{title}</TitleList>
      </div>
      <div className="row gap-y-4 pb-[6px]">
        {data?.map((e: any) => {
          return <ItemOutstand data={e} key={e?.encodeId}></ItemOutstand>;
        })}
      </div>
    </LazyLoadComponent>
  );
};

export default memo(ListOutstand);
