import { defineUserConfig } from '@vuepress/cli';
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { defaultTheme } from '@vuepress/theme-default';
import { head, navbarEn, sidebarEn } from './configs';

export default defineUserConfig({
    // set site base to default value
    base: '/',

    // extra tags in `<head>`
    head,

    locales: {
        '/': {
            lang: 'en-US',
            title: 'Kunanon Srisuntiroj (sagelga)',
            description: 'Portfolio of me',
        },
    },

    theme: defaultTheme({
        locales: {
            '/': {
                navbar: navbarEn,
                sidebar: sidebarEn,
                editLink: false,
                contributors: false,
            },
        },
    }),

    plugins: [
        googleAnalyticsPlugin({
            id: 'G-G5XLFB3TZH',
        }),
    ],
});
