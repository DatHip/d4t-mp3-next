/* eslint-disable no-var */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Head from "next/head";
import ListItemNewFeed from "./components/ListItemNewFeed";
import React, { useState } from "react";
import { apiGet } from "@/utils/https/request";
import { tmdAPI } from "@/utils/apiRouter";
import { type Metadata, type NextPage } from "next";
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from "@tanstack/react-query";
import LayoutNewFeed from "./components/LayoutNewFeed";

export const metadata: Metadata = {
  title: "Theo dõi - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const NewFeedPages: NextPage = (props: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  let hasNext: any;
  const query = useInfiniteQuery(
    ["newFeedPage", props.id],
    ({ pageParam = 1 }) => {
      return apiGet(tmdAPI.getNewFeed(props.id, pageParam));
    },
    {
      getNextPageParam: () => currentPage + 1,
      initialData: {
        pages: [props.data],
        pageParams: [1],
      },
      refetchInterval: 300000,
    }
  );

  // eslint-disable-next-line prefer-const
  hasNext = query.hasNextPage;

  return (
    <>
      <Head>
        <title>Bản Tin | D4T MP3</title>
      </Head>
      <LayoutNewFeed>
        <ListItemNewFeed
          query={query}
          data={query.data}
          setCurrentPage={setCurrentPage}
        ></ListItemNewFeed>
      </LayoutNewFeed>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.query.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["newFeedPage", id], () =>
    apiGet(tmdAPI.getNewFeed(id, 1))
  );

  return {
    props: {
      id: id,
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
};

export default NewFeedPages;
