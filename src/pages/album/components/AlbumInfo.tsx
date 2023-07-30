/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import BoxHover from "@/components/common/BoxHover";
import WrapperImage from "@/components/common/WrapperImage";
import Image from "next/image";
import React from "react";
import InfoDetails from "./InfoDetails";
import BoxHoverAction from "@/components/common/BoxHoverAction";

interface AlbumInfoProps {
  data: any;
}

const AlbumInfo = ({ data }: AlbumInfoProps) => {
  console.log(data);
  return (
    <div className="top-3 float-left w-[300px] p-3 md:sticky md:block">
      <BoxHover childrenHover={<></>}>
        <WrapperImage>
          <Image fill alt={data?.title} src={data?.thumbnailM}></Image>
        </WrapperImage>
      </BoxHover>
      <div className="flex flex-col items-center justify-center gap-1 pt-3">
        <InfoDetails data={data}></InfoDetails>
        <button
          type="button"
          className="mb-2 mt-4 flex items-center justify-center rounded-full bg-[var(--purple-primary)] px-6 py-2 text-sm text-[var(--white)]"
        >
          <div>Phát Album</div>
        </button>
        <BoxHoverAction content="Yêu thích">
          <div className="flex h-6 w-6 items-center justify-center">
            <i className="icon ic-like mt-1 !text-base"></i>
          </div>
        </BoxHoverAction>
      </div>
    </div>
  );
};

export default AlbumInfo;
