/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo } from "react";
import BoxHover from "./BoxHover";
import Image from "next/image";
import ListArtists from "./ListArtists";

interface InfoSongCurrentProps {
  data: any;
}

const InfoSongCurrent = ({ data }: InfoSongCurrentProps) => {
  return (
    <div className=" flex items-center justify-start gap-2">
      <BoxHover
        childrenHover={<></>}
        className="h-16 w-16 cursor-pointer rounded-lg  shadow-lg"
      >
        <Image
          width={64}
          height={64}
          alt={data?.title}
          src={data?.thumbnail}
          className="image_hover"
        ></Image>
      </BoxHover>
      <div>
        <div className="line-clamp-1 text-sm font-medium ">{data?.title}</div>
        <ListArtists className="mt-1 " data={data?.artists}></ListArtists>
      </div>
    </div>
  );
};

export default memo(InfoSongCurrent);
