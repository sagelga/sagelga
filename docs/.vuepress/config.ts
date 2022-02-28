import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions>({
  title: 'This is me, sagelga',
  description: 'Portfolio of me',

  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/',

    // logo: 'https://img.icons8.com/fluency/64/000000/layers.png',

    navbar: navbar.en,
    sidebar: sidebar.en,

    repo: 'sagelga/sagelga',
    repoLabel: 'GitHub',

    lastUpdated: true,
    lastUpdatedText: 'Last Update (UTC)',

    editLink: true,
    eidtLinkText: 'Edit this page',

    docsRepo: 'sagelga/documentation',
    docsDir: 'docs/sagelga',
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
