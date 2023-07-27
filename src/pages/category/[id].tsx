/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import React, { useState } from "react";
import { apiGet } from "@/utils/https/request";
import { tmdAPI } from "@/utils/apiRouter";
import { type Metadata, type NextPage } from "next";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import ItemHome from "@/components/common/ItemHome";
import BannerCategory from "./components/BannerCategory";

export const metadata: Metadata = {
  title: "Thể loại - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const CategoryDetail: NextPage = (props: any) => {
  const { data } = useQuery(
    ["hubPageDetail", props?.id],
    () => apiGet(tmdAPI.getHubDetail(props?.id)),
    {
      initialData: props.data,
      refetchInterval: 300000,
    }
  );

  console.log(data);

  return (
    <>
      <Head>
        <title>Thể loại | D4T MP3</title>
      </Head>
      <BannerCategory src={data?.data?.cover}></BannerCategory>
      {data?.data?.sections &&
        data?.data?.sections?.map((e: any, key: number) => {
          return <ItemHome key={key} data={e}></ItemHome>;
        })}
    </>
  );
};

export const getServerSideProps = async (ctx: any) => {
  const id = ctx.query.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["hubPageDetail", id], () =>
    apiGet(tmdAPI.getHubDetail(id))
  );

  return {
    props: {
      id: id,
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
};

export default CategoryDetail;
