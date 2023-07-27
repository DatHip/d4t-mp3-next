/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import TitleList from "@/components/common/TitleList";
import React, { memo, useState } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import ItemActions from "./ItemActions";

interface ListActionsProps {
  data: any[];
  title: string;
}

const ListActions = ({ data, title }: ListActionsProps) => {
  const [active, setActive] = useState(8);

  return (
    <LazyLoadComponent threshold={30}>
      <div className="mb-3 mt-9 flex items-center justify-between">
        <TitleList className="!my-0">{title}</TitleList>
      </div>
      <div className="row gap-y-4 pb-[6px]">
        {data?.map((e: any) => {
          return <ItemActions data={e} key={e?.encodeId}></ItemActions>;
        })}
      </div>
    </LazyLoadComponent>
  );
};

export default memo(ListActions);
