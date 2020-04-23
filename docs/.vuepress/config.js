module.exports = {
  repo: 'sagelga/sagelga.github.io',
  // repoLabel: 'Repository',

  // Official : https://vuepress.vuejs.org/config/#head
  head: [
    ['link', { rel: 'icon', href: 'https://avatars1.githubusercontent.com/u/44744915' }]
  ],

  // Official : https://vuepress.vuejs.org/config/#markdown
  // markdown: {
  //     lineNumbers: 'True',
  // },

  // https://vuepress.vuejs.org/plugin/
  // plugins: [
  //     // Official : https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install
  //     ['@vuepress/pwa'],

  //     // Official : https://vuepress.vuejs.org/plugin/official/plugin-medium-zoom.html
  //     ['@vuepress/medium-zoom'],

  //     // Official : https://vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
  //     ['@vuepress/back-to-top'],

  //     // Official : https://vuepress.vuejs.org/plugin/official/plugin-blog.html
  //     ['@vuepress/blog'],
  // ],

  // Official : https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar

  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Education', link: '/education/' },
      { text: 'Experience', link: '/experience/' },
      { text: 'Interests', link: '/interests/' },
      { text: 'Projects', link: '/project/' },
      { text: 'Skills', link: '/skill/' },

    ]
  }

}
