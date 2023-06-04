import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    NEXTAUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string().min(1)
        : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
      (str) => process.env.VERCEL_URL ?? str,
      process.env.VERCEL ? z.string().min(1) : z.string().url(),
    ),
    GITHUB_ID: z.string(),
    GITHUB_SECRET: z.string(),
    GOOGLE_ID: z.string(),
    GOOGLE_SECRET: z.string(),
    FIRE_BASE_API_KEY: z.string(),
    FIRE_BASE_AUTH_DOMAIN: z.string(),
    FIRE_BASE_PROJECT_ID: z.string(),
    FIRE_BASE_STORAGE_BUCKET: z.string(),
    FIRE_BASE_MESSAGING_SENDER_ID: z.string(),
    FIRE_BASE_APP_ID: z.string(),
    FIRE_BASE_MEASUREMENT_ID: z.string(),
  },
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    FIRE_BASE_API_KEY: process.env.FIRE_BASE_API_KEY,
    FIRE_BASE_AUTH_DOMAIN: process.env.FIRE_BASE_AUTH_DOMAIN,
    FIRE_BASE_PROJECT_ID: process.env.FIRE_BASE_PROJECT_ID,
    FIRE_BASE_STORAGE_BUCKET: process.env.FIRE_BASE_STORAGE_BUCKET,
    FIRE_BASE_MESSAGING_SENDER_ID: process.env.FIRE_BASE_MESSAGING_SENDER_ID,
    FIRE_BASE_APP_ID: process.env.FIRE_BASE_APP_ID,
    FIRE_BASE_MEASUREMENT_ID: process.env.FIRE_BASE_MEASUREMENT_ID,

  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
