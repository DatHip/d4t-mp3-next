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
    unoptimized: true,
    domains: [
      'avatar.talk.zdn.vn',
      'zmp3-static.zmdcdn.me',
      "photo-resize-zmp3.zmdcdn.me"
    ]
  },
};
export default config;
