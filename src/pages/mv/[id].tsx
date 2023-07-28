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
import React, { useState } from "react";
import LayoutMvPage from "./components/LayoutMvPage";

export const metadata: Metadata = {
  title: "MV - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const MVpage: NextPage = (props: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  let hasNext: any;
  const query = useInfiniteQuery(
    ["mvPage", props.id],
    ({ pageParam = 1 }) => {
      return apiGet(tmdAPI.getListMv(props.id, pageParam));
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

  console.log(query.data);

  return (
    <>
      <Head>
        <title>MV | D4T MP3</title>
      </Head>
      <LayoutMvPage id={props.id as string}>
        <div>Top100</div>
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
