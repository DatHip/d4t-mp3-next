/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState, useCallback, useEffect } from "react";
import Masonry from "react-responsive-masonry";
import { useDisclosure, useViewportSize } from "@mantine/hooks";
import NewFeedItem from "./NewFeedItem";
import ModalNewFeed from "@/components/modal/ModalNewFeed";
import { useInView } from "react-intersection-observer";
import { type UseInfiniteQueryResult } from "@tanstack/react-query";
import { LoadingIndicator } from "@/components/common/LoadingIndicator";
import Loading from "@/components/common/LoadingIndicator/Loading";
interface IListItemNewFeed {
  data: any;
  query: UseInfiniteQueryResult;
  setCurrentPage: any;
}

const ListItemNewFeed = ({ data, query, setCurrentPage }: IListItemNewFeed) => {
  const [opend, { close, open }] = useDisclosure(false);
  const { ref, inView } = useInView();
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

  useEffect(() => {
    if (!query.hasNextPage || query.isFetchingNextPage || query.isLoading) {
      return;
    }
    if (inView) {
      setCurrentPage((value: any) => value + 1);
      query.fetchNextPage();
    }
  }, [inView]);

  return (
    <div className="relative mx-auto max-w-[500px]">
      {/* <Masonry className="mt-4" gutter="14px" columnsCount={col}> */}
      {data?.pages?.map((page: any, index: number) => (
        <React.Fragment key={index}>
          {page?.data?.items?.map((e: any, index: number) => (
            <NewFeedItem
              setDataModal={handleSetData}
              data={e}
              key={index}
            ></NewFeedItem>
          ))}
        </React.Fragment>
      ))}
      {/* </Masonry> */}
      {query.isFetchingNextPage && (
        <div className="mt-4 flex items-center justify-center">
          <Loading></Loading>
        </div>
      )}
      <button
        ref={ref}
        onClick={() => {
          if (
            !query.hasNextPage ||
            query.isFetchingNextPage ||
            query.isLoading
          ) {
            return null;
          }

          return query.fetchNextPage();
        }}
        disabled={
          !query.hasNextPage || query.isFetchingNextPage || query.isLoading
        }
      ></button>

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
