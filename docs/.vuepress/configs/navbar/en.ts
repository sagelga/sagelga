import type { NavbarConfig } from "@vuepress/theme-default";

export const en: NavbarConfig = [
  // {
  //     text: 'About',
  //     link: '/about/'
  // },
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Projects",
    link: "/project/active/",
    children: [
      {
        text: "Active Projects",
        link: "/project/active/",
      },
      {
        text: "All Project",
        link: "/project/archive/",
      },
    ],
  },
  {
    text: "Skills",
    link: "/skill/",
  },
  {
    text: "Education",
    link: "/education/",
  },
  {
    text: "Interests",
    link: "/interests/",
  },
  {
    text: "Experience",
    link: "/experience/",
  },
  {
    text: "Contact",
    link: "/contact/",
  },
];
