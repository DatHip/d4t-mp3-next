/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import React, { memo } from "react";

interface IListArtists {
  data: any[];
  className?: string;
}

const TitleLinkArtist = ({ data }: { data: any }) => {
  return (
    <Link
      href={data?.link}
      className="no-underline hover:text-[var(--link-text-hover)] hover:underline"
    >
      {data?.name}
    </Link>
  );
};
const ListArtists: React.FC<IListArtists> = ({ data, className }) => {
  const artistNames = data.map((artist, index) => (
    <TitleLinkArtist data={artist} key={index}></TitleLinkArtist>
  ));

  let renderedList: any = [];

  if (artistNames.length > 3) {
    const slicedNames = artistNames.slice(0, 3);
    renderedList = [...slicedNames, <span key="ellipsis">...</span>];
  } else {
    renderedList = artistNames;
  }

  return (
    <div
      className={`line-clamp-1 cursor-pointer text-sm text-[var(--text-secondary)] ${className}`}
    >
      {renderedList.reduce((prev: any, curr: any) => [prev, ", ", curr])}
    </div>
  );
};

export default memo(ListArtists);
