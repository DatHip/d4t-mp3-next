/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import { type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";
import React, { useState, useEffect } from "react";
import LayoutMvPage from "./components/LayoutMvPage";
import MvItem from "./components/MvItem";
import { number } from "zod";
import { useInView } from "react-intersection-observer";
import Loading from "@/components/common/LoadingIndicator/Loading";

export const metadata: Metadata = {
  title: "MV - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const MVpage: NextPage = (props: any) => {
  const { ref, inView } = useInView();
  const [currentPage, setCurrentPage] = useState(1);
  let hasNext: any;
  const query = useInfiniteQuery(
    ["mvPage", props.id],
    ({ pageParam = 1 }) => {
      return apiGet(tmdAPI.getListMv(props.id, pageParam));
    },
    {
      getNextPageParam: (value) => {
        if (value?.data?.hasMore) {
          return currentPage + 1;
        } else {
          return undefined;
        }
      },
      initialData: {
        pages: [props.data],
        pageParams: [1],
      },
      refetchInterval: 300000,
    }
  );

  // eslint-disable-next-line prefer-const
  hasNext = query.hasNextPage;

  console.log(query.data);

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
    <>
      <Head>
        <title>MV | D4T MP3</title>
      </Head>
      <LayoutMvPage id={props.id as string}>
        <div className="row gap-y-4">
          {query.data?.pages?.map((page: any, index: number) => (
            <React.Fragment key={index}>
              {page?.data?.items?.map((e: { encodeId: any }) => (
                <MvItem data={e} key={e?.encodeId}></MvItem>
              ))}
            </React.Fragment>
          ))}
        </div>
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
      </LayoutMvPage>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.query.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["mvPage", id], () =>
    apiGet(tmdAPI.getListMv(id, 1))
  );

  return {
    props: {
      id: id,
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
};

export default MVpage;
