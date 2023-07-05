/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo } from "react";
import SlideHome from "../home/SlideHome";
import NewRelease from "../home/NewRelease";

const ItemHome = ({ data }: any) => {
  if (data?.sectionType === "banner") {
    return <SlideHome data={data?.items}></SlideHome>;
  }

  if (data?.sectionType === "new-release") {
    return <NewRelease data={data}></NewRelease>;
  }
  return <div></div>;
};

export default memo(ItemHome);
