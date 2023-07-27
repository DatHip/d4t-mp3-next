/* eslint-disable @next/next/no-img-element */
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
  setDataModal?: (value: any) => void;
}

const ItemHeader = ({ data }: INewFeedItem) => {
  return (
    <div className="mb-2">
      <div className="flex items-center">
        <div className="mr-2">
          <WrapperImage classNameWrapper="h-12 w-12 !overflow-hidden !rounded-full">
            <Image
              loading="lazy"
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

const NewFeedItem = ({ data, setDataModal }: INewFeedItem) => {
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
    <div className="mb-4 h-min rounded-lg bg-[var(--box-item-bg)] p-5 shadow-lg">
      <ItemHeader data={data}></ItemHeader>
      <div
        onClick={() => setDataModal(data)}
        className="relative cursor-pointer"
      >
        {data?.content?.type === "feedVideo" && (
          <div className="absolute inset-0 z-10 flex h-full w-full items-center justify-center">
            <i className="icon action-play ic-play cursor-pointer"></i>
          </div>
        )}
        <Image
          loading="lazy"
          className="relative h-auto rounded-lg object-cover"
          width={500}
          height={500}
          alt={data?.title}
          src={imgUrl || ""}
        ></Image>
      </div>
      <div className="mt-4 flex items-center justify-start gap-4">
        <button type="button" className="flex items-center justify-start gap-1">
          <i className={`icon ic-like !text-lg`} />
          <span>{0}</span>
        </button>
        <button type="button" className="flex items-center justify-start gap-1">
          <i className="icon ic-comment !text-lg" />
          <span>{data?.commend}</span>
        </button>
      </div>
    </div>
  );
};

export default memo(NewFeedItem);
