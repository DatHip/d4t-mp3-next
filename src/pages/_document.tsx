/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <title>D4T MP3 | Nghe nhạc chất lượng cao</title>
        <meta
          property='og:title'
          content='D4T MP3 | Nghe nhạc chất lượng cao'
          key='title'
        />
        <meta
          property='og:description'
          content='D4T MP3 | Nghe nhạc chất lượng cao '
        />
        <meta
          property='description'
          content='D4T MP3 | Nghe nhạc chất lượng cao '
        />
        <link rel='shortcut icon' type='image/png' href='/pabicon.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
