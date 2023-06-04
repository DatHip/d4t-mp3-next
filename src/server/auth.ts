import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import { env } from "@/env.mjs";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { app } from '@/lib/firestore';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET ,
    }),
   GoogleProvider({
      clientId: env.GOOGLE_ID ,
      clientSecret: env.GOOGLE_SECRET 
    }),
  ],
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  adapter: FirestoreAdapter(app),
  pages: {
    signIn: '/',
  },
  debug: env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
  },
  secret: env.NEXTAUTH_SECRET,

};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.

 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext["req"];
  res: GetServerSidePropsContext["res"];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
