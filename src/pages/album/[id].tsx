/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import React, { useState } from "react";
import { apiGet } from "@/utils/https/request";
import { tmdAPI } from "@/utils/apiRouter";
import { type Metadata, type NextPage } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import AlbumInfo from "./components/AlbumInfo";
import ListSongAlbum from "./components/ListSongAlbum";

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

  return (
    <>
      <Head>
        <title>Album | D4T MP3</title>
      </Head>
      <div>
        <div className="after:clear-both after:block after:content-['']">
          <AlbumInfo data={data.data}></AlbumInfo>
          <ListSongAlbum data={data.data}></ListSongAlbum>
        </div>
      </div>
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
