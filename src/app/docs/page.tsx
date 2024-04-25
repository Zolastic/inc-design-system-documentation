import { ChevronRightIcon } from "lucide-react";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
      <div className="mx-auto w-full min-w-0">
        <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
          <div className="overflow-hidden text-ellipsis whitespace-nowrap">
            Docs
          </div>
          <ChevronRightIcon className="h-4 w-4" />
          <div className="font-medium text-foreground">Introduction</div>
        </div>
        <div className="space-y-2">
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-text-default">
            Introduction
          </h1>
          <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
            Explore a collection of beautifully crafted components ready to
            enhance your app&apos;s UI. Easily integrate them into your
            projects. Accessible, customizable, and open source.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
