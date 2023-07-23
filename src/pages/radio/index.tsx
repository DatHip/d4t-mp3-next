/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Head from "next/head";
import { type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";

export const metadata: Metadata = {
  title: "Radio - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const Radio: NextPage = (props: any) => {
  const { data } = useQuery(["radioPage"], () => apiGet(tmdAPI.getRadioPage), {
    initialData: props.data,
    staleTime: 300000,
  });

  console.log(data);

  return (
    <>
      <Head>
        <title>Radio | D4T MP3</title>
      </Head>
      <main>Radio</main>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["radioPage"], () =>
    apiGet(tmdAPI.getRadioPage)
  );
  return {
    props: {
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
}

export default Radio;
