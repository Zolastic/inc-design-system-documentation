import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-24 bg-background">
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-text-default">
        Introduction
      </h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        Explore a collection of beautifully crafted components ready to enhance
        your app&apos;s UI. Easily integrate them into your projects.
        Accessible, customizable, and open source.
      </p>
    </main>
  );
};

export default Page;
