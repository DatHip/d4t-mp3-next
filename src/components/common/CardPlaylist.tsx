/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo } from "react";
import BoxHover from "@/components/common/BoxHover";
import Image from "next/image";
import Link from "next/link";
import ListArtists from "./ListArtists";
import WrapperImage from "./WrapperImage";
import { useRouter } from "next/router";
interface ICardPlaylist {
  data: any;
  hideTitle?: boolean;
}

const CardPlaylist: React.FC<ICardPlaylist> = ({ data, hideTitle }) => {
  const { push } = useRouter();
  return (
    <div className="col l-2-4 c-5 m-f-3">
      <div className="flex-1 overflow-hidden">
        <BoxHover
          onClick={() => push(`/album/${data?.encodeId}`)}
          childrenHover={
            <i className="icon action-play ic-play cursor-pointer"></i>
          }
        >
          <WrapperImage>
            <Image
              loading="lazy"
              fill
              alt={data?.title}
              src={data?.thumbnailM}
              className="image_hover"
            ></Image>
          </WrapperImage>
        </BoxHover>
        <div className="mt-2">
          {!hideTitle && (
            <>
              <Link
                href={`/album/${data?.encodeId}`}
                className=" line-clamp-1 text-sm font-bold text-[var(--text-primary)] hover:text-[var(--link-text-hover)]"
              >
                {data?.title}
              </Link>
              <ListArtists className="mt-1" data={data?.artists}></ListArtists>
            </>
          )}
          {hideTitle && (
            <div className="line-clamp-2 text-sm text-[var(--text-secondary)]">
              {data?.sortDescription}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(CardPlaylist);
