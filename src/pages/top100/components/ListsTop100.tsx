import React, { memo } from "react";

interface HeaderTop100Props {
  data: any;
}

const ListsTop100 = ({ data }: HeaderTop100Props) => {
  console.log(data);
  return <div></div>;
};

export default memo(ListsTop100);
