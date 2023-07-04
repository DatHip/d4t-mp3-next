import ChangeTheme from "@/components/common/ChangeTheme";
import MainLayout from "@/components/layouts/Main/MainLayout";
import ReduxStore from "@/store";
import { MantineProvider } from "@mantine/core";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import "@/styles/grid.css";
import "@/styles/root.css";
import "@/styles/iconZs.css";
import "@/styles/globals.css";
import "tippy.js/dist/tippy.css";
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const MyApp: AppType<{
  session: Session | null | any;
  dehydratedState: any;
}> = ({ Component, pageProps: { session, ...pageProps } }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ReduxStore>
      <SessionProvider session={session}>
        <MantineProvider>
          <ChangeTheme></ChangeTheme>
          <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps?.dehydratedState}>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </Hydrate>
          </QueryClientProvider>
        </MantineProvider>
      </SessionProvider>
    </ReduxStore>
  );
};

export default MyApp;
