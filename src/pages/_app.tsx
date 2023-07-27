/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import ChangeTheme from "@/components/common/ChangeTheme";
import MainLayout from "@/components/layouts/Main/MainLayout";
import ReduxStore from "@/store";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import "@/styles/grid.css";
import "@/styles/root.css";
import "@/styles/iconZs.css";
import "@/styles/globals.css";
import "tippy.js/dist/tippy.css";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import NextNProgress from "nextjs-progressbar";
export const queryClient = new QueryClient();

const MyApp: AppType<{
  session: Session | null | any;
  dehydratedState: any;
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <ReduxStore>
      <SessionProvider session={session}>
        <MantineProvider>
          <ChangeTheme></ChangeTheme>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps?.dehydratedState}>
              <NextNProgress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />
              <MainLayout>
                <Component {...pageProps} />
                <Analytics />
              </MainLayout>
            </Hydrate>
            <ReactQueryDevtools></ReactQueryDevtools>
          </QueryClientProvider>
        </MantineProvider>
      </SessionProvider>
    </ReduxStore>
  );
};

export default MyApp;
