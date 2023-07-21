/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ItemNewRelease from "@/components/common/ItemNewRelease";
import React from "react";

const ListItemNewRelease = ({ data }: any) => {
  const list1 = data.slice(0, 4);
  const list2 = data.slice(4, 8);
  const list3 = data.slice(8, 12);

  return (
    <div className="row mt-5 flex-nowrap overflow-x-auto">
      <div className="col l-4 c-5 m-f-6">
        {list1.map((e: any) => {
          return <ItemNewRelease data={e} key={e?.encodeId}></ItemNewRelease>;
        })}
      </div>
      <div className="col l-4 c-5 m-f-6">
        {list2.map((e: any) => {
          return <ItemNewRelease data={e} key={e?.encodeId}></ItemNewRelease>;
        })}
      </div>
      <div className="col l-4 c-5 m-f-0">
        {list3.map((e: any) => {
          return <ItemNewRelease data={e} key={e?.encodeId}></ItemNewRelease>;
        })}
      </div>
    </div>
  );
};

export default ListItemNewRelease;
