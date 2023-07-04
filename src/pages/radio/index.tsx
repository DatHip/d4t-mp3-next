import Head from "next/head";
import { type Metadata, type NextPage } from "next";

export const metadata: Metadata = {
  title: "Radio - D4T MP3",
  description: "D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV",
};

const Radio: NextPage = () => {
  return (
    <>
      <Head>
        <title>Radio | D4T MP3</title>
      </Head>
      <main>Radio</main>
    </>
  );
};

export default Radio;
