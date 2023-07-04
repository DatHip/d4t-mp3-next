import Head from "next/head";
import { type Metadata, type NextPage } from "next";

export const metadata: Metadata = {
  title: "Bảng xếp hạng - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const Chart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bảng xếp hạng | D4T MP3</title>
      </Head>
      <main>Chart</main>
    </>
  );
};

export default Chart;
