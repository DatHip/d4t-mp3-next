/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import { type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";
import HeaderTop100 from "./components/HeaderTop100";
import ListsTop100 from "./components/ListsTop100";

export const metadata: Metadata = {
  title: "Top100 - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const Top100Page: NextPage = (props: any) => {
  const { data } = useQuery(
    ["top100Page"],
    () => apiGet(tmdAPI.getTop100Page),
    {
      initialData: props.data,
      refetchInterval: 300000,
    }
  );

  return (
    <>
      <Head>
        <title>Top100 | D4T MP3</title>
      </Head>
      <HeaderTop100 />
      <ListsTop100 data={data?.data}></ListsTop100>
    </>
  );
};

export async function getServerSideProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["top100Page"], () =>
    apiGet(tmdAPI.getTop100Page)
  );
  return {
    props: {
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
}

export default Top100Page;
