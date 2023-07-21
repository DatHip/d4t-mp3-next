/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Head from "next/head";
import { type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";
import ChartHomeRight from "@/components/home/ChartHome/ChartHomeRight";

export const metadata: Metadata = {
  title: "Bảng xếp hạng - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const Chart: NextPage = (props: any) => {
  const { data } = useQuery(["chartPage"], () => apiGet(tmdAPI.getTopChart), {
    initialData: props.data,
    staleTime: 300000,
  });

  console.log(data);

  return (
    <>
      <Head>
        <title>Bảng xếp hạng | D4T MP3</title>
      </Head>
      <main>
        <div>
          <ChartHomeRight data={data?.RTChart}></ChartHomeRight>
        </div>
      </main>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["chartPage"], () =>
    apiGet(tmdAPI.getTopChart)
  );
  return {
    props: {
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
}

export default Chart;
