import Head from "next/head";
import { type Metadata, type NextPage } from "next";

export const metadata: Metadata = {
  title: "Top100 - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const Top100Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>Top100 | D4T MP3</title>
      </Head>
      <main>Top100</main>
    </>
  );
};

export default Top100Page;
