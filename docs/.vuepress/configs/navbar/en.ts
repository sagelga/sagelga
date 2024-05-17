import type { NavbarConfig } from '@vuepress/theme-default';

export const navbarEn: NavbarConfig = [
    {
        text: 'Home',
        link: '/',
    },
    {
        text: 'Profile',
        children: [
            {
                text: 'Profile',
                children: [
                    { text: 'Experience', link: '/experience/' },
                    { text: 'Education', link: '/education/' },
                    { text: 'Projects', link: '/project/' },
                    { text: 'Skills', link: '/skill/' },
                    { text: 'Interests', link: '/interests/' },
                ],
            },
            {
                text: 'Internet Profiles',
                children: [
                    { text: 'GitHub', link: 'https://github.com/sagelga/' },
                    {
                        text: 'Trailblazer (Salesforce)',
                        link: 'https://trailblazer.me/id/sagelga',
                    },
                    { text: 'LinkedIn', link: 'https://github.com/sagelga/' },
                    { text: 'Leetcode', link: 'https://leetcode.com/sagelga/' },
                ],
            },
        ],
    },
    {
        text: 'Projects',
        children: [
            {
                text: 'Projects',
                children: [
                    {
                        text: 'All projects',
                        link: '/project/',
                    },
                ],
            },
            {
                text: 'Project Website',
                children: [
                    {
                        text: 'Documentation',
                        link: 'https://docs.sagelga.com/',
                    },
                    {
                        text: 'Pre-programming',
                        link: 'https://prepro.sagelga.com/',
                    },
                    {
                        text: 'Weather',
                        link: 'https://weather.sagelga.com/',
                    },
                    {
                        text: 'Telegram Thai',
                        link: 'https://telegram.sagelga.com/',
                    },
                    {
                        text: 'Pre-programming (Legacy)',
                        link: 'https://prepro60.sagelga.com/',
                    },
                    {
                        text: 'Cheatsheet (deprecated',
                        link: 'https://learn.sagelga.com/',
                    },
                ],
            },
        ],
    },
    {
        text: 'Documentation',
        children: [
            {
                text: 'Documentation Website',
                children: [
                    {
                        text: 'All Documentations',
                        link: 'https://docs.sagelga.com/',
                    },
                ],
            },
            {
                text: 'Projects',
                children: [
                    {
                        text: 'Google Apps Script Approval Workflow',
                        link: 'https://docs.sagelga.com/approval-workflow/',
                    },
                    {
                        text: 'Codenames',
                        link: 'https://docs.sagelga.com/codenames/',
                    },
                    {
                        text: 'POS System (Compro Project)',
                        link: 'https://docs.sagelga.com/compro-project/',
                    },
                    {
                        text: 'Data Journal',
                        link: 'https://docs.sagelga.com/data-journal/',
                    },
                    {
                        text: 'Documentation',
                        link: 'https://docs.sagelga.com/documentation/',
                    },
                    {
                        text: 'Oh Sheet!',
                        link: 'https://docs.sagelga.com/oh-sheet/',
                    },
                    {
                        text: 'Project Panda',
                        link: 'https://docs.sagelga.com/panda/',
                    },
                    {
                        text: 'Trash Melody',
                        link: 'https://docs.sagelga.com/trashmelody/',
                    },
                ],
            },
        ],
    },
    {
        text: 'Blog',
        link: 'https://blog.sagelga.com/',
    },
    {
        text: 'ByteSide.one',
        children: [
            {
                text: 'ByteSide.one',
                children: [
                    {
                        text: 'Website',
                        link: 'https://www.byteside.one/th/',
                    },
                    {
                        text: 'Website (EN)',
                        link: 'https://www.byteside.one/en/',
                    },
                    {
                        text: 'Facebook',
                        link: 'https://www.facebook.com/byteside.one/',
                    },
                    {
                        text: 'Twitter',
                        link: 'https://twitter.com/bytesideone',
                    },
                    {
                        text: 'Instagram',
                        link: 'https://www.instagram.com/bytesideone/',
                    },
                    {
                        text: 'YouTube',
                        link: 'https://www.youtube.com/@bytesideone/',
                    },
                ],
            },
            {
                text: 'ByteSide.one World',
                children: [
                    { text: 'Facebook', link: 'https://www.byteside.one/en/' },
                ],
            },
        ],
    },
    {
        text: 'Contact',
        children: [
            {
                text: 'Social Network',
                children: [
                    {
                        text: 'LinkedIn',
                        link: 'https://www.linkedin.com/in/kunanon/',
                    },
                ],
            },
            {
                text: 'Business Email',
                children: [
                    {
                        text: 'Email me',
                        link: 'mailto:kunanonsrisuntiroj@outlook.com',
                    },
                ],
            },
        ],
    },
];
