/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import Loading from "@/components/common/LoadingIndicator/Loading";
import ListCarousel from "@/components/home/ListCarousel";
import React, { memo } from "react";

interface ListSuggestedAlbumProps {
  data: any;
  isLoading: boolean;
}

const ListSuggestedAlbum = ({ data, isLoading }: ListSuggestedAlbumProps) => {
  return (
    <div className="">
      {isLoading && (
        <div className="mt-6">
          <Loading></Loading>
        </div>
      )}
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
