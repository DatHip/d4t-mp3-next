/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import React, { useState } from "react";
import { apiGet } from "@/utils/https/request";
import { tmdAPI } from "@/utils/apiRouter";
import { type Metadata, type NextPage } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Album - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const AlbumPage: NextPage = (props: any) => {
  const { data } = useQuery(
    ["albumPage", props.id],
    () => apiGet(tmdAPI.getAlbumPage(props.id)),
    {
      initialData: props.data,
      refetchInterval: 300000,
    }
  );
  console.log(data);

  return (
    <>
      <Head>
        <title>Bản Tin | D4T MP3</title>
      </Head>
      <div></div>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.query.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["albumPage", id], () =>
    apiGet(tmdAPI.getAlbumPage(id))
  );

  return {
    props: {
      id: id,
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
};

export default AlbumPage;
