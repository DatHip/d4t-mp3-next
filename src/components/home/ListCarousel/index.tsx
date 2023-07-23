/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import CardPlaylist from "@/components/common/CardPlaylist";
import LinkToAll from "@/components/common/LinkToAll";
import TitleList from "@/components/common/TitleList";
import Link from "next/link";
import { memo } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";

interface IListCarousel {
  data: any;
}

const ListCarousel: React.FC<IListCarousel> = ({ data }) => {
  return (
    <LazyLoadComponent threshold={30}>
      <div className="mb-3 mt-9 flex items-center justify-between">
        <TitleList className="!my-0">{data?.title}</TitleList>
        {data?.link && <LinkToAll href={data?.link}></LinkToAll>}
      </div>
      <div className="row overflow-x flex-nowrap pb-[6px]">
        {data?.items.slice(0, 5).map((list: any) => (
          <CardPlaylist
            key={list?.encodeId}
            hideTitle={data?.options?.hideTitle}
            data={list}
          ></CardPlaylist>
        ))}
      </div>
    </LazyLoadComponent>
  );
};

export default memo(ListCarousel);
