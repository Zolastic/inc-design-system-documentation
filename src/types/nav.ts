type NavLinkType = {
  name: string;
  link: string;
};

interface NavItem {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ReactNode;
  label?: string;
}

interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

interface MainNavItem extends NavItem {}

interface SidebarNavItem extends NavItemWithChildren {}

export type {
  NavLinkType,
  NavItem,
  NavItemWithChildren,
  MainNavItem,
  SidebarNavItem,
};
