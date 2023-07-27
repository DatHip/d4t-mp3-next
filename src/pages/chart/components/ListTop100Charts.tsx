import AutoSizer from "react-virtualized-auto-sizer";
import ItemSongPage from "@/components/common/ItemSongPage/ItemSongPage";
import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
interface IListTop100Charts {
  data: any[];
  activeLength?: number;
}

const ListTop100Charts = ({ data, activeLength = 10 }: IListTop100Charts) => {
  const [active100, setActive100] = useState(activeLength);
  return (
    <div className="">
      {data.slice(0, active100).map((e: any, index: number) => {
        return <ItemSongPage index={index} data={e} key={e?.encodeId} charts />;
      })}

      {active100 === 10 && (
        <button
          onClick={() => setActive100(100)}
          className="mx-auto mt-4 block rounded-full border border-[var(--text-item-hover)] bg-transparent px-6 py-2 text-sm font-normal text-[var(--text-item-hover)] hover:bg-[var(--alpha-bg)]"
          type="button"
        >
          Xem top 100
        </button>
      )}
    </div>
  );
};

export default ListTop100Charts;
