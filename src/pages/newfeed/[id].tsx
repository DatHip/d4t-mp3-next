/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Head from "next/head";
import ListItemNewFeed from "./components/ListItemNewFeed";
import React from "react";
import { apiGet } from "@/utils/https/request";
import { tmdAPI } from "@/utils/apiRouter";
import { type Metadata, type NextPage } from "next";
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Theo dõi - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const NewFeedPages: NextPage = (props: any) => {
  const { data } = useInfiniteQuery(
    ["newFeedPage", props.id],
    () => apiGet(tmdAPI.getNewFeed(props.id, 1)),
    {
      initialData: {
        pages: [props.data],
        pageParams: [1],
      },
      refetchInterval: 300000,
    }
  );

  return (
    <>
      <Head>
        <title>Bản Tin | D4T MP3</title>
      </Head>
      <ListItemNewFeed data={data.pages[0].data.items}></ListItemNewFeed>
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
      data: dehydrate(queryClient).queries[0].state,
    },
  };
};

export default NewFeedPages;
