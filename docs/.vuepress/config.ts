import { defineUserConfig } from "@vuepress/cli";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { defaultTheme } from "@vuepress/theme-default";
import { head, navbarEn, sidebarEn } from "./configs";

export default defineUserConfig({
  // set site base to default value
  base: "/",

  // extra tags in `<head>`
  head,

  locales: {
    "/": {
      lang: "en-US",
      title: "This is me, sagelga",
      description: "Portfolio of me",
    },
  },

  theme: defaultTheme({
    logo: "https://img.icons8.com/fluency/32/000000/home.png",
    repo: "sagelga/sagelga",
    docsRepo: "sagelga/sagelga",
    docsBranch: "main",

    locales: {
      "/": {
        navbar: navbarEn,
        sidebar: sidebarEn,
        editLinkText: "Edit this page on GitHub",
      },
    },
  }),

  plugins: [
    googleAnalyticsPlugin({
      id: "G-G5XLFB3TZH",
    }),
  ],
});
