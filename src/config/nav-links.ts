import { NavLinkType, SidebarNavItem } from "@/types/nav";

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

const docsSidebarLinks: SidebarNavItem[] = [
  {
    title: "Getting Started",
    items: [
      {
        title: "Introduction",
        href: "/docs",
        items: [],
      },
      {
        title: "Installation",
        href: "/docs/installation",
        items: [],
      },
    ],
  },
  {
    title: "Components",
    items: [
      {
        title: "Accordion",
        href: "/docs/components/accordion",
        items: [],
      },
      {
        title: "Button",
        href: "/docs/components/button",
        items: [],
      },
      {
        title: "Checkable Tag",
        href: "/docs/components/checkable-tag",
        items: [],
      },
      {
        title: "Multi Select",
        href: "/docs/components/multi-select",
        items: [],
      },
      {
        title: "Select",
        href: "/docs/components/select",
        items: [],
      },
      {
        title: "Tag",
        href: "/docs/components/tag",
        items: [],
      },
    ],
  },
  {
    title: "Credits",
    items: [
      {
        title: "Contributors",
        href: "/docs/credits/contributors",
        items: [],
      },
    ],
  },
];

export { siteHeaderLinks, docsSidebarLinks };
