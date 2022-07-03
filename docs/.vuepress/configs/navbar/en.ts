import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarEn: NavbarConfig = [
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
        text: "All Project",
        link: "/project/archive/",
      },
      {
        text: "Active Projects",
        link: "/project/active/",
      },
    ],
  },
  {
    text: "Skills",
    link: "/skill/",
  },
  {
    text: "Interests & Hobbies",
    link: "/interests/",
  },
  {
    text: "Experience",
    link: "/experience/",
  },
  {
    text: "Education",
    link: "/education/",
  },
  {
    text: "Contact",
    link: "/contact/",
  },
];
