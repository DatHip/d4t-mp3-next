/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import BoxHover from "@/components/common/BoxHover";
import Image from "next/image";
import Link from "next/link";
import React, { memo } from "react";

interface ItemOutstandProps {
  data: any;
}

const ItemOutstand = ({ data }: ItemOutstandProps) => {
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

          <div className="absolute inset-0 z-50 flex h-full w-full items-center justify-center">
            <p className="font-medium text-white md:text-xl">{data?.title}</p>
          </div>
        </BoxHover>
      </Link>
    </div>
  );
};

export default memo(ItemOutstand);
