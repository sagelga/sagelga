import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { navbar, sidebar } from "./configs";

export default defineUserConfig({
  // set site base to default value
  base: "/",

  // extra tags in `<head>`
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://img.icons8.com/fluency/32/000000/layers.png",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "en-US",
      title: "This is me, sagelga",
      description: "Portfolio of me",
    },
  },

  theme: defaultTheme({
    logo: "https://img.icons8.com/fluency/32/000000/layers.png",
    repo: "sagelga/sagelga",
    docsRepo: "sagelga/documentation",
    docsBranch: "main",

    locales: {
      "/": {
        navbar: navbar.en,
        sidebar: sidebar.en,
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
