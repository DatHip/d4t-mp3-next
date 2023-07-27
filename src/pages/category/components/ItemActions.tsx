/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import BoxHover from "@/components/common/BoxHover";
import WrapperImage from "@/components/common/WrapperImage";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

interface ItemActionsProps {
  data: any;
}

const ItemActions = ({ data }: ItemActionsProps) => {
  return (
    <div className="col l-3 m-f-4 c-6">
      <Link href={`/category/${data?.encodeId}`}>
        <BoxHover childrenHover={<></>}>
          <Image
            width={600}
            height={600}
            loading="lazy"
            alt={data?.title}
            src={data?.thumbnail}
            className="image_hover"
          ></Image>
          <div className="bg-linear absolute inset-0 z-40 h-full w-full"></div>
          <div className="absolute bottom-3 left-3 z-50">
            <p className="font-medium text-white md:text-lg">{data?.title}</p>
            <div className="mt-1 flex items-center justify-start gap-2">
              {data?.playlists?.map((e: any) => {
                return (
                  <WrapperImage classNameWrapper="w-[20%]" key={e?.encodeId}>
                    <Image
                      width={600}
                      height={600}
                      loading="lazy"
                      alt={e?.title}
                      src={e?.thumbnail}
                    ></Image>
                  </WrapperImage>
                );
              })}
            </div>
          </div>
        </BoxHover>
      </Link>
    </div>
  );
};

export default memo(ItemActions);
