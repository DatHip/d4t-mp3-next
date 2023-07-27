/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import { type Metadata, type NextPage } from "next";
import { tmdAPI } from "@/utils/apiRouter";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { apiGet } from "@/utils/https/request";
import BannerCategory from "./components/BannerCategory";
import ListOutstand from "./components/ListOutstand";
import ListActions from "./components/ListActions";
import ListsGenre from "./components/ListsGenre";

export const metadata: Metadata = {
  title: "Thể loại - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const CategoryPage: NextPage = (props: any) => {
  const { data } = useQuery(["hubPage"], () => apiGet(tmdAPI.getHubHome), {
    initialData: props.data,
    refetchInterval: 300000,
  });

  const randomNumber = Math.floor(Math.random() * 2);
  return (
    <>
      <Head>
        <title>Thể loại | D4T MP3</title>
      </Head>

      <BannerCategory
        src={data?.data?.banners[randomNumber]?.cover}
      ></BannerCategory>
      <div className="mt-6">
        <ListOutstand
          title="Quốc Gia"
          data={data?.data?.nations}
        ></ListOutstand>
        <ListOutstand
          title="Nổi Bật"
          data={data?.data?.featured?.items}
        ></ListOutstand>
        <ListActions
          title="Tâm Trạng Và Hoạt Động"
          data={data?.data?.topic}
        ></ListActions>
        <ListsGenre data={data?.data?.genre}></ListsGenre>
      </div>
    </>
  );
};

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["hubPage"], () => apiGet(tmdAPI.getHubHome));
  return {
    props: {
      data: dehydrate(queryClient).queries[0].state.data,
    },
  };
}

export default CategoryPage;
