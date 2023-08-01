/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import ListCarousel from "@/components/home/ListCarousel";
import React, { memo } from "react";

interface ListSuggestedAlbumProps {
  data: any;
}

const ListSuggestedAlbum = ({ data }: ListSuggestedAlbumProps) => {
  return (
    <div className="">
      {data?.data?.map((e: any) => {
        if (e?.sectionType === "playlist") {
          return <ListCarousel data={e} key={e?.title}></ListCarousel>;
        }
        return null;
      })}
    </div>
  );
};

export default memo(ListSuggestedAlbum);
