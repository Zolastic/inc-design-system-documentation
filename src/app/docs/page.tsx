import GitHubComponentLibraryButton from "@/components/github-component-library-button";
import { Button } from "inc-design-system/button";
import { Component, Download, Package } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
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
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start mt-4 space-y-4 lg:space-x-4 lg:space-y-0">
        <Link
          href="https://www.npmjs.com/package/inc-design-system"
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant="secondary"
            className="flex justify-center items-center space-x-1"
          >
            <span>Package</span>
            <Package size={16} />
          </Button>
        </Link>
        <GitHubComponentLibraryButton buttonText="Package source code" />
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
