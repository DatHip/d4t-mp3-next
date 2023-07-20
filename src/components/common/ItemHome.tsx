/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { memo } from "react";
import SlideHome from "../home/SlideHome";
import NewRelease from "../home/NewRelease";
import ListCarousel from "../home/ListCarousel";
import NewReleaseSlider from "../home/NewReleaseSlider";
import WeekChartHome from "../home/WeekChartHome";
import RadioHome from "../home/RadioHome";

const ItemHome = ({ data }: any) => {
  if (data?.sectionType === "banner") {
    return <SlideHome data={data?.items}></SlideHome>;
  }

  if (data?.sectionType === "new-release") {
    return <NewRelease data={data}></NewRelease>;
  }

  if (data?.sectionType === "playlist") {
    return <ListCarousel data={data}></ListCarousel>;
  }

  if (data?.sectionType === "newReleaseChart") {
    return <NewReleaseSlider data={data}></NewReleaseSlider>;
  }

  if (data?.sectionType === "weekChart") {
    return <WeekChartHome data={data}></WeekChartHome>;
  }

  if (data?.sectionId === "hLiveRadio") {
    return <RadioHome data={data}></RadioHome>;
  }

  return <div></div>;
};

export default memo(ItemHome);
