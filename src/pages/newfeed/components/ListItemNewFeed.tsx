/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import Masonry from "@mui/lab/Masonry";
import { useViewportSize } from "@mantine/hooks";
import NewFeedItem from "./NewFeedItem";

interface IListItemNewFeed {
  data: any;
}

const ListItemNewFeed = ({ data }: IListItemNewFeed) => {
  const { width } = useViewportSize();
  const col = React.useMemo(() => {
    if (width <= 600) {
      return 1;
    } else if (width <= 1400) {
      return 2;
    } else {
      return 3;
    }
  }, [width]);
  return (
    <div className="relative">
      {data && (
        <Masonry columns={col}>
          {data?.map((e: any, index: number) => (
            <NewFeedItem data={e} key={index}></NewFeedItem>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default ListItemNewFeed;
