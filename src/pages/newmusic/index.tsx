/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import { type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";
import IconPlayChart from "@/asset/icons/IconPlayChart";
import ListTop100Charts from "../chart/components/ListTop100Charts";

export const metadata: Metadata = {
  title: "Nhạc mới - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const NewMusic: NextPage = (props: any) => {
  const { data } = useQuery(["newSongPage"], () => apiGet(tmdAPI.getNewSong), {
    initialData: props.data,
    refetchInterval: 300000,
  });

  return (
    <>
      <Head>
        <title>Nhạc mới | D4T MP3</title>
      </Head>
      <div className="mb-4 text-2xl font-bold ">
        <div className="flex items-center justify-start gap-1 ">
          <div>Mới Phát Hành</div>
          <div className="mt-1 cursor-pointer">
            <IconPlayChart></IconPlayChart>
          </div>
        </div>
      </div>
      <ListTop100Charts
        data={data?.data?.items}
        activeLength={100}
      ></ListTop100Charts>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["newSongPage"], () =>
    apiGet(tmdAPI.getNewSong)
  );
  return {
    props: {
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
}

export default NewMusic;
