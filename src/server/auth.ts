import { type GetServerSidePropsContext } from "next";
import {
  getServerSession,
  type NextAuthOptions,
} from "next-auth";
import { env } from "@/env.mjs";
import { FirestoreAdapter } from "@next-auth/firebase-adapter";
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { cert } from 'firebase-admin/app';

export const authOptions: NextAuthOptions = {
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET ,
    }),
   GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID ,
      clientSecret: env.GOOGLE_CLIENT_SECRET 
    }),
  ],
  adapter: FirestoreAdapter({
    credential : cert({
      projectId: process.env.FIRE_BASE_PROJECT_ID,
      clientEmail: process.env.FIRE_BASE_CLIENT_EMAIL,
      privateKey: process.env.FIRE_BASE_PRIVATE_KEY,
    })
  })
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
