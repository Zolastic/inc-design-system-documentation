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
      {
        title: "Colour Palette",
        href: "/docs/colour-palette",
        items: [],
      },
      {
        title: "Styling Guidelines",
        href: "/docs/styling-guidelines",
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
        title: "Alert",
        href: "/docs/components/alert",
        items: [],
      },
      {
        title: "Button",
        href: "/docs/components/button",
        items: [],
      },
      {
        title: "Calendar",
        href: "/docs/components/calendar",
        items: [],
      },
      {
        title: "Checkable Tag",
        href: "/docs/components/checkable-tag",
        items: [],
      },
      {
        title: "Checkbox",
        href: "/docs/components/checkbox",
        items: [],
      },
      {
        title: "Date Picker",
        href: "/docs/components/date-picker",
        items: [],
      },
      {
        title: "Default List",
        href: "/docs/components/default-list",
        items: [],
      },
      {
        title: "File Upload",
        href: "/docs/components/file-upload",
        items: [],
      },
      {
        title: "Input",
        href: "/docs/components/input",
        items: [],
      },
      {
        title: "Modal",
        href: "/docs/components/modal",
        items: [],
      },
      {
        title: "Multi Select",
        href: "/docs/components/multi-select",
        items: [],
      },
      {
        title: "Paginated List",
        href: "/docs/components/paginated-list",
        items: [],
      },
      {
        title: "Popover",
        href: "/docs/components/popover",
        items: [],
      },
      {
        title: "Radio Group",
        href: "/docs/components/radio-group",
        items: [],
      },
      {
        title: "Range Date Picker",
        href: "/docs/components/range-date-picker",
        items: [],
      },
      {
        title: "Select",
        href: "/docs/components/select",
        items: [],
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
        items: [],
      },
      {
        title: "Tag",
        href: "/docs/components/tag",
        items: [],
      },
      {
        title: "Textarea",
        href: "/docs/components/textarea",
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
