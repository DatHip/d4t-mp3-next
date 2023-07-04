import Head from "next/head";
import { type Metadata, type NextPage } from "next";

export const metadata: Metadata = {
  title: "Theo dõi - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const NewFeed: NextPage = () => {
  return (
    <>
      <Head>
        <title>Theo dõi | D4T MP3</title>
      </Head>
      <main>New Feed</main>
    </>
  );
};

export default NewFeed;
