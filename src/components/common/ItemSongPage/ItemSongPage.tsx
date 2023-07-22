/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { memo, useMemo } from "react";
import InfoSongCurrent from "../InfoSongCurrent";
import Link from "next/link";
import fancyTimeFormat from "@/utils/fancyTimeFormat";
import MinimizeOutlinedIcon from "@mui/icons-material/MinimizeOutlined";
import ArrowDropUpOutlinedIcon from "@mui/icons-material/ArrowDropUpOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

interface ItemSongPageProps {
  data: any;
  charts?: boolean;
  index?: any;
}

const ItemSongPage = ({ data, charts, index }: ItemSongPageProps) => {
  console.log(data);

  return (
    <div className="zing_chart_item border-b border-[var(--border-secondary)]">
      <div className="group flex select-none items-center p-2 hover:bg-[var(--alpha-bg)]">
        <div className="mr-2 flex w-1/2 gap-2">
          {charts && (
            <div className="flex items-center justify-center text-xs font-bold text-[var(--song-item-action)]">
              <div className="w-16">
                <div className="zing_chart-top">{index + 1}</div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div>
                  {data?.rakingStatus === 0 ? (
                    <MinimizeOutlinedIcon
                      fontSize="medium"
                      className="text-base"
                    ></MinimizeOutlinedIcon>
                  ) : data?.rakingStatus > 0 ? (
                    <ArrowDropUpOutlinedIcon className="h-4 w-4 text-[#1dc186]"></ArrowDropUpOutlinedIcon>
                  ) : (
                    <ArrowDropDownOutlinedIcon
                      className="h-4 w-4 text-[#e35050]"
                      color="error"
                    ></ArrowDropDownOutlinedIcon>
                  )}
                </div>
                <div className="h-4 text-xs font-bold text-white">
                  {data?.rakingStatus === 0 ? "" : Math.abs(data?.rakingStatus)}
                </div>
              </div>
            </div>
          )}
          <InfoSongCurrent
            className="!h-10 !w-10 !rounded"
            data={data}
          ></InfoSongCurrent>
        </div>
        <div className="flex-1 self-center">
          <Link
            className="text-xs text-[var(--song-item-action)] hover:underline"
            href={`/album/${data?.album?.encodeId}`}
          >
            {data?.album?.title || data?.item?.title}
          </Link>
        </div>
        <div className="ml-2">
          <div className="hidden group-hover:flex"></div>
          <div className="w-11 text-xs text-[var(--song-item-action)]">
            {fancyTimeFormat(data?.duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ItemSongPage);
