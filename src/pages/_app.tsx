import MainLayout from '@/components/layouts/Main/MainLayout'
import { SessionProvider } from 'next-auth/react'
import '@/styles/grid.css'
import '@/styles/root.css'
import '@/styles/iconZs.css'
import '@/styles/globals.css'
import 'tippy.js/dist/tippy.css'
import { type Session } from 'next-auth'
import { type AppType } from 'next/app'
import ReduxStore from '@/store'
import { MantineProvider } from '@mantine/core'
import ChangeTheme from '@/components/common/ChangeTheme'

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <ReduxStore>
      <SessionProvider session={session}>
        <MantineProvider>
          <ChangeTheme></ChangeTheme>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </MantineProvider>
      </SessionProvider>
    </ReduxStore>
  )
}

export default MyApp
