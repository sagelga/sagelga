import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'This is me, sagelga',
  description: 'Portfolio of me',

  // head: [
  //   ['link', {
  //     rel: 'stylesheet',
  //     href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'
  //   }],
  //   ['link', {
  //     rel: 'stylesheet',
  //     href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
  //   }]
  // ],

  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/',

    // logo: 'https://img.icons8.com/fluency/64/000000/layers.png',

    navbar: navbar.en,
    sidebar: sidebar.en,

    lastUpdated: true,
    lastUpdatedText: 'Last Update (UTC)',

    editLink: true,
    editLinkText: 'Report an Issue',

    contributors: true,
    contributorsText: 'Contributor(s)',

    docsRepo: 'sagelga/sagelga',
    docsDir: 'docs',
    docsBranch: 'main',
  },

  plugins: [
    ['@vuepress/plugin-google-analytics', {
      id: 'G-G5XLFB3TZH'
    }
    ],
    // ['@vuepress/plugin-search', {
    //   locales: {
    //     '/': {
    //       placeholder: 'Search',
    //     },
    //   },
    // },
    // ],
  ],
})
