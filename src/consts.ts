import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ramil Gasanov",
  EMAIL: "gasanoff.ramil@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 0,
};

export const HOME: Metadata = {
  TITLE: "Ramil Gasanov Portfolio",
  DESCRIPTION: "Head of Marketing and Product Marketing with a deep focus on developer tools, manufacturing tech, and AI-driven solutions. I specialize in building and positioning technical products, crafting compelling go-to-market strategies, and driving growth in B2B SaaS. Explore my work, projects, and insights in this portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of the projects I accomplished and may speak about.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "github",
    HREF: "https://github.com/dobrygazon"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/gasanoff/",
  }
];
