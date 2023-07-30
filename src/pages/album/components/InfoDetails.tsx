/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import ListArtists from "@/components/common/ListArtists";
import formatTimeCreateAlbum from "@/utils/formatTimeCreateAlbum";
import React, { memo } from "react";

interface InfoDetailsProps {
  data: any;
}

const InfoDetails = ({ data }: InfoDetailsProps) => {
  return (
    <>
      <h3 className="text-xl font-bold">{data?.title}</h3>
      <p className="text-xs text-[var(--text-secondary)]">
        Cập nhật: {formatTimeCreateAlbum(data?.contentLastUpdate)}
      </p>
      <ListArtists data={data?.artists}></ListArtists>
      <div className="text-xs text-[var(--text-secondary)]">
        {" "}
        {data?.like > 10000
          ? data?.like.toString().slice(0, -3) + "K"
          : data?.like}{" "}
        người yêu thích
      </div>
    </>
  );
};

export default memo(InfoDetails);
