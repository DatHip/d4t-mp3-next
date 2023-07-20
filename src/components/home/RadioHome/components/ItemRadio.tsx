/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo } from "react";
import BoxHover from "@/components/common/BoxHover";
import WrapperImage from "@/components/common/WrapperImage";
import Image from "next/image";

interface IItemRadioProps {
  data: any;
}

const ItemRadio = ({ data }: IItemRadioProps) => {
  return (
    <div className="col l-2 c-5 m-f-2">
      <div className="relative">
        <div className="overflow-hidden rounded-full border-[4px] border-[#FF4B4A]">
          <BoxHover childrenHover={<></>}>
            <WrapperImage>
              <Image
                loading="lazy"
                fill
                src={data?.program?.thumbnail}
                className="image_hover"
                alt={data?.title}
              ></Image>
            </WrapperImage>
          </BoxHover>
          <div className="absolute bottom-[-6px] right-1/2 z-10 translate-x-1/2">
            <Image
              fill
              src="https://zmp3-static.zadn.vn/skins/zmp3-v6.1/images/icons/live-tag.svg"
              alt="live"
              className="!relative z-10"
            ></Image>
          </div>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-col items-center justify-center">
        <h5 className="text-base font-semibold text-[var(--text-primary)]">
          {data?.host?.name}
        </h5>
        <p className="text-sm text-[var(--text-secondary)]">
          {data?.activeUsers} đang nghe
        </p>
      </div>
    </div>
  );
};

export default memo(ItemRadio);
