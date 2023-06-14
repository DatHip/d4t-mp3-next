import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  const styleHTML  = "--layout-bg: #061C4F ; --player-bg: #061641 ; --primary-bg: #1A3570 ; --purple-primary: #3560F5 ; --link-item-hover: #8D22C3"

  return (
    <Html data-theme="blue" >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}