/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BoxHover from "@/components/common/BoxHover";
import ListArtists from "@/components/common/ListArtists";
import fancyTimeFormat from "@/utils/fancyTimeFormat";
import Image from "next/image";
import React, { memo } from "react";

interface MvItemProps {
  data: any;
}

const MvItem = ({ data }: MvItemProps) => {
  return (
    <div className="col l-4 m-f-4 c-6 mb-3">
      <BoxHover childrenHover={<></>}>
        <Image
          loading="lazy"
          width={500}
          height={250}
          alt={data?.title}
          src={data?.thumbnailM}
          className="image_hover"
        ></Image>
        <div className="absolute bottom-2 right-2 rounded bg-black px-2 py-1 text-xs text-white">
          {fancyTimeFormat(data?.duration)}
        </div>
      </BoxHover>
      <div className="mt-2">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10  overflow-hidden rounded-full">
            <Image
              loading="lazy"
              width={40}
              height={40}
              className="h-full w-full"
              alt={data?.title}
              src={data?.artist?.thumbnail || data?.thumbnailM}
            ></Image>
          </div>
          <div className="flex-1">
            <div className=" line-clamp-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--link-text-hover)]">
              {data?.title}
            </div>
            <ListArtists className="mt-1" data={data?.artists}></ListArtists>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MvItem);
