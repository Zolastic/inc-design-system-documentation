"use client";

import DocsBreadCrumb from "@/components/docs-breadcrumb";
import { DocsSidebarNav } from "@/components/docs-sidebar-nav";
import { docsSidebarLinks } from "@/config/nav-links";
import { capitalizeFirstLetter } from "@/lib/utils";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { usePathname } from "next/navigation";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function DocsLayout({ children }: DocsLayoutProps) {
  const pathname = usePathname();
  let pageTitle = pathname.split("/").pop();

  if (pageTitle === "docs") {
    pageTitle = "Introduction";
  }

  return (
    <div className="border-b bg-background text-text-default min-h-screen">
      <div className="container mx-auto flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="docsSidebarNavContainer fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-120px)] overflow-auto w-full shrink-0 md:sticky md:block">
          <ScrollArea className="h-full p-6 pr-6 lg:p-8">
            <DocsSidebarNav items={docsSidebarLinks} />
          </ScrollArea>
        </aside>
        <main className="relative p-6 lg:gap-10 lg:p-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            {pageTitle && (
              <DocsBreadCrumb pageTitle={capitalizeFirstLetter(pageTitle)} />
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
