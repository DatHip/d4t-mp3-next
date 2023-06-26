/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
await import("./src/env.mjs");

/** @type {import("next").NextConfig} */
const config = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    domains: [
      'avatar.talk.zdn.vn',
      "photo-resize-zmp3.zmdcdn.me"
    ]
  },
};
export default config;
