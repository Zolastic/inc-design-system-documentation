"use client";

import { DocsSidebarNav } from "@/components/docs-sidebar-nav";
import { docsSidebarLinks } from "@/config/nav-links";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import ScrollableList from "inc-design-system/scrollableList";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  return (
    <div className="border-b bg-background text-text-default">
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full p-6 pr-6 lg:p-8">
            <DocsSidebarNav items={docsSidebarLinks} />
          </ScrollArea>
        </aside>
        {children}
      </div>
    </div>
  );
}
