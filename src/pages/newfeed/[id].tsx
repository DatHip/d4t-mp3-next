/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import { type GetServerSideProps, type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import {
  QueryClient,
  dehydrate,
  useInfiniteQuery,
} from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";
import ListItemNewFeed from "./components/ListItemNewFeed";

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
  return <ListItemNewFeed data={data.pages[0].data.items}></ListItemNewFeed>;
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
