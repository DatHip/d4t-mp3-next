/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BoxHover from "@/components/common/BoxHover";
import ListArtists from "@/components/common/ListArtists";
import timeLine from "@/utils/timeLine";
import Image from "next/image";
import React, { memo } from "react";

interface IItemReleaseSlider {
  data: any;
  index: number;
}

const ItemReleaseSlider: React.FC<IItemReleaseSlider> = ({ data, index }) => {
  return (
    <div className="flex h-full cursor-pointer gap-3 rounded-md bg-[var(--box-item-bg)] p-4 text-[var(--text-primary)] shadow-md">
      <BoxHover
        childrenHover={<></>}
        className="max-h-[120px] min-h-[120px] min-w-[120px] max-w-[120px]"
      >
        <Image
          width={120}
          height={120}
          alt={data?.title}
          src={data?.thumbnailM}
        ></Image>
      </BoxHover>
      <div className="flex h-[120px] w-full flex-1 flex-col">
        <div>
          <div className="line-clamp-1 text-[var(--text-primary)]">
            {data?.title}
          </div>
          <ListArtists data={data?.artists}></ListArtists>
        </div>
        <div className="mt-auto flex items-end justify-between">
          <div className="release-item-chart">#{index}</div>
          <div className="text-[var(--text-secondary)]">
            {timeLine(data?.releaseDate)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ItemReleaseSlider);
