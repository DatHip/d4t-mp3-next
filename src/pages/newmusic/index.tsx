import Head from "next/head";
import { type Metadata, type NextPage } from "next";

export const metadata: Metadata = {
  title: "Nhạc mới - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const NewMusic: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nhạc mới | D4T MP3</title>
      </Head>
      <main>NewMusic</main>
    </>
  );
};

export default NewMusic;
