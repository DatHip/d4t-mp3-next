/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ListChartCol from "./ListChartCol";

const ListChartWeeks = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="mt-10">
      <div className="mb-6 text-4xl font-extrabold text-[var(--text-item-hover)]">
        Bảng Xếp Hạng Tuần
      </div>
      <div className="row overflow-x flex-nowrap">
        <ListChartCol data={data?.vn} title="Việt Nam"></ListChartCol>
        <ListChartCol data={data?.us} title="US-UK"></ListChartCol>
        <ListChartCol data={data?.korea} title="K-Pop"></ListChartCol>
      </div>
    </div>
  );
};

export default ListChartWeeks;
