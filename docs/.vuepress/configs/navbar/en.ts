import type { NavbarConfig } from "@vuepress/theme-default";

export const navbarEn: NavbarConfig = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Profile",
    children: [
      {
        text: "Profile",
        children: [
          { text: "Experience", link: "/experience/" },
          { text: "Education", link: "/education/" },
          { text: "Projects", link: "/project/" },
          { text: "Skills", link: "/skill/" },
          { text: "Interests", link: "/interests/" },
        ],
      },
      {
        text: "Documentation",
        children: [
          { text: "Docs.sagelga.com", link: "https://docs.sagelga.com/" },
          {
            text: "Approval Workflow",
            link: "https://docs.sagelga.com/approval-workflow/",
          },
          {
            text: "Codenames",
            link: "https://docs.sagelga.com/codenames/",
          },
          {
            text: "Compro Project",
            link: "https://docs.sagelga.com/compro-project/",
          },
          {
            text: "Data Journal",
            link: "https://docs.sagelga.com/data-journal/",
          },
          {
            text: "Documentation",
            link: "https://docs.sagelga.com/documentation/",
          },
          {
            text: "Oh Sheet!",
            link: "https://docs.sagelga.com/oh-sheet/",
          },
          {
            text: "Project Panda",
            link: "https://docs.sagelga.com/panda/",
          },
          {
            text: "Trash Melody",
            link: "https://docs.sagelga.com/trashmelody/",
          },
        ],
      },
    ],
  },
  {
    text: "Project",
    children: [
      {
        text: "Project",
        children: [
          { text: "Documentation", link: "https://docs.sagelga.com/" },
          { text: "Pre-programming", link: "https://prepro.sagelga.com/" },
          {
            text: "Pre-programming (Legacy)",
            link: "https://prepro60.sagelga.com/",
          },
          { text: "Telegram Thai", link: "https://telegram.sagelga.com/" },
          { text: "Cheatsheet", link: "https://learn.sagelga.com/" },
        ],
      },
    ],
  },
  {
    text: "Blog",
    children: [
      {
        text: "Personal Blog",
        children: [
          { text: "Blog.sagelga.com", link: "https://blog.sagelga.com/" },
          { text: "Medium.com", link: "https://medium.com/@sagelga" },
        ],
      },
      {
        text: "ByteSide.one",
        children: [
          { text: "Website (TH)", link: "https://www.byteside.one/th/" },
          { text: "Website (EN)", link: "https://www.byteside.one/en/" },
          { text: "Facebook", link: "https://www.facebook.com/byteside.one/" },
          { text: "Twitter", link: "https://twitter.com/bytesideone" },
          { text: "Instagram", link: "https://www.instagram.com/bytesideone/" },
          { text: "YouTube", link: "https://www.youtube.com/@bytesideone/" },
        ],
      },
      {
        text: "ByteSide.one World",
        children: [{ text: "Facebook", link: "https://www.byteside.one/en/" }],
      },
    ],
  },
  {
    text: "Contact",
    children: [
      {
        text: "Social Network",
        children: [
          { text: "LinkedIn", link: "https://www.linkedin.com/in/kunanon/" },
        ],
      },
      {
        text: "Internet Profiles",
        children: [
          { text: "GitHub", link: "https://github.com/sagelga/" },
          {
            text: "Trailblazer.me (Salesforce)",
            link: "https://trailblazer.me/id/sagelga",
          },
        ],
      },
    ],
  },
];
