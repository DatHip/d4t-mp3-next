import { type Metadata } from 'next'
import { type NextPage } from 'next'
import Head from 'next/head'
import { useSession } from 'next-auth/react'
import ChangeTheme from '@/components/common/ChangeTheme'

export const metadata: Metadata = {
  title: 'Trang chủ - D4T MP3',
  description: 'D4T MP3 | Nghe nhạc chất lượng cao trên desktop, mobile và TV'
}

const Home: NextPage = () => {
  // const session = useSession()
  return (
    <>
      <Head>
        <title>Khám Phá | D4T MP3</title>
      </Head>
      <main>
        <ChangeTheme></ChangeTheme>
      </main>
    </>
  )
}

export default Home
