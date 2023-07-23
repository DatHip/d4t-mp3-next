/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable jsx-a11y/alt-text */
import WrapperImage from "@/components/common/WrapperImage";
import formatTimeNewFeed from "@/utils/formatTimeNewFeed";
import Image from "next/image";
import React, { memo } from "react";

interface INewFeedItem {
  data: any;
}

const ItemHeader = ({ data }: { data: any }) => {
  return (
    <div className="mb-2">
      <div className="flex items-center">
        <div className="mr-2">
          <WrapperImage classNameWrapper="h-12 w-12 !overflow-hidden !rounded-full">
            <Image
              fill
              alt={data?.publisher.name}
              src={data?.publisher.thumbnail}
            ></Image>
          </WrapperImage>
        </div>
        <div>
          <div className="line-clamp-1 text-sm">{data?.publisher.name}</div>
          <div className="mt-1 text-xs font-light text-[var(--text-secondary)]">
            {formatTimeNewFeed(data?.createdTime)}
          </div>
        </div>
      </div>
      <div className="mt-3 line-clamp-5">{data?.title}</div>
    </div>
  );
};

const NewFeedItem = ({ data }: INewFeedItem) => {
  const imgUrl = React.useMemo(() => {
    let img;
    if (data?.content.type === "album") {
      img = data?.content?.photos[0].url;
    }
    if (data?.content.type === "feedVideo") {
      img = data?.content?.thumbnail;
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return img;
  }, [data]);

  return (
    <div className="rounded-lg bg-[var(--box-item-bg)] p-5 shadow-lg">
      <ItemHeader data={data}></ItemHeader>
      <div className="mb-4">
        <WrapperImage>
          <Image fill alt={data?.title} src={imgUrl || ""}></Image>
        </WrapperImage>
      </div>
    </div>
  );
};

export default memo(NewFeedItem);
