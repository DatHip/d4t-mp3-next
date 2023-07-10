/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import { memo } from "react";
import BoxHover from "@/components/common/BoxHover";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ListArtists from "./ListArtists";
import timeLine from "@/utils/timeLine";

interface IItemNewRelease {
  data: any;
}

const ItemNewRelease: React.FC<IItemNewRelease> = ({ data }) => {
  return (
    <div className="group flex items-center justify-between rounded-md p-2 transition-all hover:bg-[var(--alpha-bg)]">
      <div className="flex items-center justify-center gap-2">
        <BoxHover
          className="h-[60px] w-[60px]"
          childrenHover={<i className="icon action-play ic-play"></i>}
        >
          <figure>
            <LazyLoadImage height={"auto"} src={data?.thumbnail} alt="" />
          </figure>
        </BoxHover>
        <div>
          <div className="text-[var(--player-text] line-clamp-1 text-sm">
            {data?.title}
          </div>
          <ListArtists className="mt-1" data={data?.artists}></ListArtists>
          <div className="mt-1 line-clamp-1 cursor-pointer text-sm text-[var(--text-secondary)]">
            {timeLine(data?.releaseDate)}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default memo(ItemNewRelease);
