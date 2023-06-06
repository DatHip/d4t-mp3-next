import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'
import '@/styles/grid.css'
import '@/styles/root.css'
import '@/styles/iconZs.css'
import '@/styles/globals.css'
import MainLayout from '@/components/layouts/Main/MainLayout'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </SessionProvider>
  )
}

export default MyApp
