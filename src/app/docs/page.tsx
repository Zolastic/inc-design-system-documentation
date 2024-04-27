import { Button } from "inc-design-system/button";
import { Component, Download } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-text-default">
        Introduction
      </h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        Explore a collection of beautifully crafted components ready to enhance
        your app&apos;s UI. Easily integrate them into your projects.
        Accessible, customizable, and open source.
      </p>
      <div className="flex items-center justify-start mt-4 space-x-4">
        <Link href="/docs/installation">
          <Button
            variant="primary"
            className="flex justify-center items-center space-x-1"
          >
            <span>Installation</span>
            <Download size={16} />
          </Button>
        </Link>
        <Link href="/docs/components/accordion">
          <Button
            variant="primary"
            className="flex justify-center items-center space-x-1"
          >
            <span>Components</span>
            <Component size={16} />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Page;
