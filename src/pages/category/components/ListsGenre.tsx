/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import ListCarousel from "@/components/home/ListCarousel";
import React, { memo } from "react";

interface ListsGenreProps {
  data: any[];
}

const ListsGenre = ({ data }: ListsGenreProps) => {
  return (
    <>
      {data?.map((e: any) => (
        <ListCarousel data={e} key={e?.encodeId}></ListCarousel>
      ))}
    </>
  );
};

export default memo(ListsGenre);
