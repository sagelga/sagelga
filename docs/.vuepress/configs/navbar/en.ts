import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarEn: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Profile",
    children: [
      { text: "Experience", link: "/experience/" },
      { text: "Education", link: "/education/" },
      { text: "Projects", link: "/project/" },
      { text: "Skills", link: "/skill/" },
      { text: "Interests", link: "/interests/" },
      {
        text: "External Links",
        children: [
          {
            text: "GitHub",
            link: "https://github.com/sagelga",
          },
          {
            text: "LinkedIn",
            link: "https://www.linkedin.com/in/kunanon/",
          },
        ],
      },
    ],
  },
  {
    text: "Website",
    children: [
      {
        text: "Personal",
        children: [
          { text: "Personal Blog", link: "https://blog.sagelga.com/" },
        ],
      },
      {
        text: "Projects",
        children: [
          { text: "Documentation", link: "https://docs.sagelga.com/" },
          { text: "Pre-programming", link: "https://prepro.sagelga.com/" },
          {
            text: "Pre-programming (Old)",
            link: "https://prepro60.sagelga.com/",
          },
          { text: "Telegram Thai", link: "https://telegram.sagelga.com/" },
          { text: "Cheatsheet", link: "https://learn.sagelga.com/" },
        ],
      },
      {
        text: "ByteSide.one",
        children: [{ text: "ByteSide", link: "https://www.byteside.one/" }],
      },
    ],
  },
];
