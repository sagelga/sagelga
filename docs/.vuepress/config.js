module.exports = {
  repo: 'sagelga/sagelga',
  // repoLabel: 'Repository',
  title: 'This is me, sagelga',
  description: 'Portfolio of me',
  smoothScroll: true,

  themeConfig: {
    search: false,
    lastUpdated: 'Last Updated',
    contributors: true,
    navbar: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Featured Projects',
        link: '/project/'
      },
      {
        text: 'Experience',
        link: '/experience/'
      },
      {
        text: 'Skills',
        link: '/skill/'
      },
      {
        text: 'Education',
        link: '/education/'
      },
      // { text: 'Interests', link: '/interests/' },
      {
        text: 'Contact',
        link: '/contact/'
      },
    ]
  }

}
