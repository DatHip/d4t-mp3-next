/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

import { memo } from "react";
import BoxHover from "@/components/common/BoxHover";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ListArtists from "./ListArtists";
import timeLine from "@/utils/timeLine";
import BoxHoverAction from "@/components/common/BoxHoverAction";
import IconVip from "@/asset/icons/IconVip";

interface IItemNewRelease {
  data: any;
}

const ItemNewRelease: React.FC<IItemNewRelease> = ({ data }) => {
  return (
    <div
      className={`group flex items-center justify-between rounded-md p-2 transition-all hover:bg-[var(--alpha-bg)] ${
        data?.streamingStatus === 2 ? "brightness-50" : ""
      }`}
    >
      <div className="flex items-center justify-center gap-2">
        <BoxHover
          className="max-h-[60px] min-h-[60px] min-w-[60px] max-w-[60px]"
          childrenHover={<i className="icon action-play ic-play"></i>}
        >
          <figure>
            <LazyLoadImage height={"auto"} src={data?.thumbnail} alt="" />
          </figure>
        </BoxHover>
        <div>
          <div className="text-[var(--player-text] flex items-center justify-between gap-2 text-sm">
            <p className="line-clamp-1">{data?.title}</p>
            {data?.streamingStatus === 2 && (
            
                <IconVip></IconVip>
          
            )}
          </div>
          <ListArtists className="mt-1" data={data?.artists}></ListArtists>
          <div className="mt-1 line-clamp-1 cursor-pointer text-sm text-[var(--text-secondary)]">
            {timeLine(data?.releaseDate)}
          </div>
        </div>
      </div>
      <div className="hidden  items-center justify-center group-hover:flex">
        <BoxHoverAction>
          <i className="icon ic-like !text-base"></i>
        </BoxHoverAction>
      </div>
    </div>
  );
};

export default memo(ItemNewRelease);
