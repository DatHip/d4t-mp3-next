/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useCallback } from "react";
import Masonry from "react-responsive-masonry";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import NewFeedItem from "./NewFeedItem";
import ModalNewFeed from "@/components/modal/ModalNewFeed";

interface IListItemNewFeed {
  data: any;
}

const ListItemNewFeed = ({ data }: IListItemNewFeed) => {
  const [opend, { close, open }] = useDisclosure(false);

  const [dataModal, setDataModal] = useState<any>({});

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

  const handleSetData = useCallback((value: any) => {
    setDataModal(value);
    open();
  }, []);

  return (
    <div className="relative">
      {data && (
        <Masonry gutter="14px" columnsCount={col}>
          {data?.map((e: any, index: number) => (
            <NewFeedItem
              setDataModal={handleSetData}
              data={e}
              key={index}
            ></NewFeedItem>
          ))}
        </Masonry>
      )}
      <ModalNewFeed
        dataModal={dataModal}
        setDataModal={setDataModal}
        close={close}
        opend={opend}
      ></ModalNewFeed>
    </div>
  );
};

export default ListItemNewFeed;
