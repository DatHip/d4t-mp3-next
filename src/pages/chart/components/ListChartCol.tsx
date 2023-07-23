/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import ItemSongPage from "@/components/common/ItemSongPage/ItemSongPage";
import React, { memo } from "react";

const ListChartCol = ({ data, title }: { data: any; title: string }) => {
  return (
    <div className="col l-4 c-5 m-f-4">
      <div className="rounded-2xl bg-[var(--chart-box-bg-alpha)] px-3 py-5">
        <div className="mb-2 ml-10 text-2xl font-bold text-[var(--text-item-hover)]">
          {title}
        </div>
        <div>
          {data?.items?.slice(0, 5).map((e: any, i: number) => (
            <ItemSongPage
              index={i}
              data={e}
              key={e?.encodeId}
              hideAlbum
              charts
              className="!w-full"
              classNameChart="!w-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(ListChartCol);
