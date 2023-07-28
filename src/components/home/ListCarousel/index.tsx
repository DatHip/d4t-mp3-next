/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import CardPlaylist from "@/components/common/CardPlaylist";
import LinkToAll from "@/components/common/LinkToAll";
import TitleList from "@/components/common/TitleList";
import Link from "next/link";
import { memo, useMemo } from "react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import clsx from "clsx";
interface IListCarousel {
  data: any;
  flexWrap?: boolean;
}

const getIdFromUrl = (url: string) => {
  const regex = /\/([A-Za-z0-9]+)\.html$/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

const ListCarousel: React.FC<IListCarousel> = ({ data, flexWrap }) => {
  const getLink = useMemo(() => {
    if (!data?.link) {
      return null;
    }

    if (data?.link === "/moi-phat-hanh") {
      return "/newmusic";
    }

    return getIdFromUrl(data?.link)
      ? "/category/" + getIdFromUrl(data?.link)
      : data?.link;
  }, []);

  // console.log(getLink);

  return (
    <LazyLoadComponent threshold={30}>
      <div className="mb-3 mt-9 flex items-center justify-between">
        <TitleList className="!my-0">{data?.title}</TitleList>
        {data?.link && <LinkToAll href={getLink}></LinkToAll>}
      </div>
      {data?.items?.length > 0 && (
        <>
          <div
            className={clsx(
              "row overflow-x flex-nowrap gap-y-4 pb-[6px]",
              flexWrap && "!flex-wrap"
            )}
          >
            {data?.items
              .slice(0, flexWrap ? data?.items.length + 1 : 5)
              .map((list: any) => (
                <CardPlaylist
                  key={list?.encodeId}
                  hideTitle={data?.options?.hideTitle}
                  data={list}
                ></CardPlaylist>
              ))}
          </div>
        </>
      )}
      {data?.playlists?.length > 0 && (
        <>
          <div
            className={clsx(
              "row overflow-x flex-nowrap gap-y-4 pb-[6px]",
              flexWrap && "!flex-wrap"
            )}
          >
            {data?.playlists
              .slice(0, flexWrap ? data?.items.length + 1 : 5)
              .map((list: any) => (
                <CardPlaylist
                  key={list?.encodeId}
                  hideTitle={data?.options?.hideTitle}
                  data={list}
                ></CardPlaylist>
              ))}
          </div>
        </>
      )}
    </LazyLoadComponent>
  );
};

export default memo(ListCarousel);
