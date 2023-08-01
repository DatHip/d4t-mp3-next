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
import { clsx } from "@mantine/core";

interface ItemSongPageProps {
  data: any;
  charts?: boolean;
  index?: any;
  hideAlbum?: boolean;
  className?: string;
  classNameChart?: string;
  classNameAlbum?: string;
}

const ItemSongPage = ({
  data,
  charts,
  index,
  hideAlbum,
  className,
  classNameChart,
  classNameAlbum,
}: ItemSongPageProps) => {
  return (
    <div className="zing_chart_item border-b border-[var(--border-secondary)]">
      <div className="group flex select-none items-center justify-between p-2 hover:bg-[var(--alpha-bg)]">
        <div className={clsx("mr-2 flex w-1/2 gap-2", className)}>
          {charts && (
            <div className="flex items-center justify-center text-xs font-bold text-[var(--song-item-action)]">
              <div className={clsx("w-16", classNameChart)}>
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
        {!hideAlbum && (
          <div className={clsx("flex-1 self-center", classNameAlbum)}>
            <Link
              className="text-xs text-[var(--song-item-action)] hover:underline"
              href={`/album/${data?.album?.encodeId}`}
            >
              {data?.album?.title || data?.item?.title}
            </Link>
          </div>
        )}
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
