import { NavLinkType } from "@/types/nav-link-type";

const siteHeaderLinks: NavLinkType[] = [
  {
    name: "Docs",
    link: "/docs",
  },
  {
    name: "Components",
    link: "/docs/components/accordion",
  },
];

const docsSidebarLinks: NavLinkType[] = [
  {
    name: "Introduction",
    link: "/docs",
  },
  {
    name: "installation",
    link: "/docs/installation",
  },
];

const docsComponentLinks: NavLinkType[] = [
  {
    name: "Accordion",
    link: "/docs/components/accordion",
  },
];

export { siteHeaderLinks, docsSidebarLinks, docsComponentLinks };
