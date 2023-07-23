/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo } from "react";
import BoxHover from "./BoxHover";
import Image from "next/image";
import ListArtists from "./ListArtists";
import { clsx } from "@mantine/core";
import IconVip from "@/asset/icons/IconVip";

interface InfoSongCurrentProps {
  data: any;
  className?: string;
}

const InfoSongCurrent = ({ data, className }: InfoSongCurrentProps) => {
  return (
    <div className="flex items-center justify-start gap-3">
      <BoxHover
        childrenHover={<></>}
        className={clsx(
          className,
          "h-16 w-16 cursor-pointer rounded-lg shadow-lg"
        )}
      >
        <Image
          width={64}
          height={64}
          alt={data?.title}
          src={data?.thumbnail}
          className="image_hover"
        ></Image>
      </BoxHover>
      <div className="flex-1">
        <div className="line-clamp-1 flex items-center gap-1">
          <div className="line-clamp-1 text-sm font-medium">{data?.title}</div>
          {data?.streamingStatus === 2 && <IconVip></IconVip>}
        </div>
        <ListArtists className="mt-1 " data={data?.artists}></ListArtists>
      </div>
    </div>
  );
};

export default memo(InfoSongCurrent);
