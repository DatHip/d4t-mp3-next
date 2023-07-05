/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";

const ListItemNewRelease = ({ data }: any) => {
  const list1 = data.slice(0, 4);
  const list2 = data.slice(4, 8);
  const list3 = data.slice(8, 12);

  return (
    <div className="row">
      <div className="col l-4 c-9 m-6"></div>
      <div className="col l-4 c-9 m-6"></div>
      <div className="col l-4 c-0 m-6"></div>
    </div>
  );
};

export default ListItemNewRelease;
