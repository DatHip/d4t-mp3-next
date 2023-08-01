/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import ItemSongPage from "@/components/common/ItemSongPage/ItemSongPage";
import fancyTimeFormat from "@/utils/fancyTimeFormat";
import React from "react";

interface ListSongAlbumProps {
  data: any;
}

const ListSongAlbum = ({ data }: ListSongAlbumProps) => {
  console.log(data);
  return (
    <div className="md:ml-[330px]">
      {data?.sortDescription && (
        <div>
          <span className="text-[var(--text-secondary)]">Lời tựa </span>
          {data?.sortDescription}
        </div>
      )}
      <div className="mt-4">
        <div className="flex w-full items-center justify-center border-b border-[var(--border-primary)] p-2 py-[10px] text-xs font-normal uppercase text-[var(--song-item-action)]">
          <div className="w-1/2">Bài Hát</div>
          <div className="hidden pl-2 text-left sm:block">Album</div>
          <div className="flex-1  pr-2 text-right">Thời gian</div>
        </div>
        {data?.song?.items?.map((e: any) => (
          <ItemSongPage
            classNameAlbum="hidden sm:block"
            data={e}
            key={e?.encodeId}
          ></ItemSongPage>
        ))}
        <h3 className="ml-[12px] mt-[10px] text-xs text-[var(--text-secondary)]">
          <span>{data?.song?.total} bài hát</span>
          <span className="mx-[8px]">•</span>
          <span>{fancyTimeFormat(data?.song?.totalDuration, true)}</span>
        </h3>
      </div>
    </div>
  );
};

export default ListSongAlbum;
