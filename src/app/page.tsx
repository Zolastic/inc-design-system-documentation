import { siteConfig } from "@/config/site";
import { Button } from "inc-design-system/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24 bg-background">
      <h1 className="text-5xl font-bold text-center text-text-default">
        Build your app with{" "}
      </h1>
      <h1 className="text-5xl font-bold text-center text-primary-disabled">
        INC Design System
      </h1>
      <p className="text-center text-text-default mt-4 max-w-[750px]">
        Explore a collection of beautifully crafted components ready to enhance
        your app&apos;s UI. Easily integrate them into your projects.
        Accessible, customizable, and open source.
      </p>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <Link href="/docs">
          <Button variant="secondary">Get Started!</Button>
        </Link>
        <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
          <Button className="flex justify-center items-center space-x-2 bg-grey-700 hover:bg-grey-600">
            <Github />
            <span>GitHub</span>
          </Button>
        </Link>
      </div>
    </main>
  );
}
