import Head from "next/head";
import { type Metadata, type NextPage } from "next";

export const metadata: Metadata = {
  title: "Thể loại - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const CategoryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Thể loại | D4T MP3</title>
      </Head>
      <main>New Feed</main>
    </>
  );
};

export default CategoryPage;
