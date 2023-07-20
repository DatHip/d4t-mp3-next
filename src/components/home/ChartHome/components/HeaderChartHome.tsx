import IconPlayChart from "@/asset/icons/IconPlayChart";
import Link from "next/link";
import React from "react";

const HeaderChartHome = () => {
  return (
    <>
      <div className="absolute inset-0 block bg-[#2b273f]"></div>
      <div className="absolute inset-0 block bg-[#33104cf2]"></div>
      <div className="relative  z-50 mb-5 flex items-center text-2xl font-bold text-white">
        <div className="flex items-center justify-start gap-1 ">
          <Link className="bg_text_chart" href={"/chart"}>
            #zingchart
          </Link>
          <div className="mt-1 cursor-pointer">
            <IconPlayChart></IconPlayChart>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderChartHome;
