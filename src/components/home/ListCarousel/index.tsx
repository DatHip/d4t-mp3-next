/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import CardPlaylist from "@/components/common/CardPlaylist";
import LinkToAll from "@/components/common/LinkToAll";
import TitleList from "@/components/common/TitleList";
import Link from "next/link";
import { memo } from "react";

interface IListCarousel {
  data: any;
}

const ListCarousel: React.FC<IListCarousel> = ({ data }) => {
  return (
    <div>
      <div className="mb-3 mt-9 flex items-center justify-between">
        <TitleList className="!my-0">{data?.title}</TitleList>
        {data?.link && <LinkToAll href={data?.link}></LinkToAll>}
      </div>
      <div className="flex items-start justify-between gap-6">
        {data?.items.slice(0, 5).map((list: any) => (
          <CardPlaylist
            key={list?.encodeId}
            hideTitle={data?.options?.hideTitle}
            data={list}
          ></CardPlaylist>
        ))}
      </div>
    </div>
  );
};

export default memo(ListCarousel);
