/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Head from "next/head";
import { type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";
import ItemHome from "@/components/common/ItemHome";

export const metadata: Metadata = {
  title: "Trang chủ - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const Home: NextPage<any> = (props) => {
  const { data } = useQuery(["home"], () => apiGet(tmdAPI.getHome), {
    initialData: props.data,
    staleTime: 300000,
  });

  console.log(props.data)

  return (
    <>
      <Head>
        <title>Khám Phá | D4T MP3</title>
      </Head>
      <main>
        {data?.data?.items &&
          data?.data?.items?.map((e: any, key: number) => {
            return <ItemHome key={key} data={e}></ItemHome>;
          })}
      </main>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["home"], () => apiGet(tmdAPI.getHome));
  return {
    props: {
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
}

export default Home;
