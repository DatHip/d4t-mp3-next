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
  title: "Nghệ Sĩ - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const ArtistPage: NextPage = (props: any) => {
  const { data } = useQuery(
    ["artistPage", props.id],
    () => apiGet(tmdAPI.getArtistPage(props.id)),
    {
      initialData: props.data,
      refetchInterval: 300000,
    }
  );
  console.log(data);

  return (
    <>
      <Head>
        <title>Nghệ Sĩ | D4T MP3</title>
      </Head>
      <div></div>
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.query.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["artistPage", id], () =>
    apiGet(tmdAPI.getArtistPage(id))
  );

  return {
    props: {
      id: id,
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
};

export default ArtistPage;
