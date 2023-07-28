/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ListCarousel from "@/components/home/ListCarousel";
import React, { memo } from "react";

interface ListsTop100Props {
  data: any[];
}

const ListsTop100 = ({ data }: ListsTop100Props) => {
  console.log(data);
  return (
    <>
      {data.map((e: any) => {
        return <ListCarousel data={e} flexWrap key={e?.title}></ListCarousel>;
      })}
    </>
  );
};

export default memo(ListsTop100);
