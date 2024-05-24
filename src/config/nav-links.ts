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
        title: "Alert Modal",
        href: "/docs/components/alert-modal",
        items: [],
      },
      {
        title: "Alert",
        href: "/docs/components/alert",
        items: [],
      },
      {
        title: "Avatar",
        href: "/docs/components/avatar",
        items: [],
      },
      {
        title: "Badge",
        href: "/docs/components/badge",
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
        title: "Card",
        href: "/docs/components/card",
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
        title: "Hover Card",
        href: "/docs/components/hover-card",
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
        title: "Progress",
        href: "/docs/components/progress",
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
        title: "Result Page",
        href: "/docs/components/result-page",
        items: [],
      },
      {
        title: "Select",
        href: "/docs/components/select",
        items: [],
      },
      {
        title: "Sheet",
        href: "/docs/components/sheet",
        items: [],
      },
      {
        title: "Switch",
        href: "/docs/components/switch",
        items: [],
      },
      {
        title: "Table",
        href: "/docs/components/table",
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
      {
        title: "Time Picker",
        href: "/docs/components/time-picker",
        items: [],
      },
      {
        title: "Toast",
        href: "/docs/components/toast",
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
