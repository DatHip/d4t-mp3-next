/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
export default config;
