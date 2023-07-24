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
import { useState } from "react";

export const queryClient = new QueryClient();

const MyApp: AppType<{
  session: Session | null | any;
  dehydratedState: any;
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [queryClient2] = useState(queryClient);
  return (
    <ReduxStore>
      <SessionProvider session={session}>
        <MantineProvider>
          <ChangeTheme></ChangeTheme>
          <QueryClientProvider client={queryClient2}>
            <Hydrate state={pageProps?.dehydratedState}>
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
