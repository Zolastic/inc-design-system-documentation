import GitHubLinkButton from "@/components/github-link-button";
import { contributors } from "@/config/contributors";
import { Avatar, AvatarFallback, AvatarImage } from "inc-design-system/avatar";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-text-default">
        Contributors
      </h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        A list of individuals who have played a significant role in shaping the
        INC Design System. (Alphabetical order)
      </p>

      <div className="flex flex-col mt-4">
        {contributors.map((contributor, index) => (
          <div key={index} className="flex items-center space-x-4 mt-4">
            <Link
              href={contributor.github}
              className="flex items-center space-x-4"
              target="_blank"
              rel="noreferrer"
            >
              <Avatar>
                <AvatarImage
                  src={`${contributor.github}.png`}
                  alt="userProfile"
                />
                <AvatarFallback>
                  {contributor.fallback
                    ? contributor.fallback
                    : contributor.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Link>
            <Link
              href={contributor.github}
              className="underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              <h3 className="leading-none text-text-default font-medium">
                {contributor.name}
              </h3>
            </Link>
          </div>
        ))}
        <p className="text-lg text-text-default/60 mt-8">
          A heartfelt thank you to everyone who has made valuable additions to
          the INC Design System! 🎉💖🤩
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-start mt-4 space-y-4 lg:space-x-4 lg:space-y-0">
        <GitHubLinkButton buttonText="Package source code" />
        <GitHubLinkButton
          buttonText="Documentation source code"
          link="https://github.com/Zolastic/inc-design-system-documentation"
        />
      </div>
    </>
  );
};

export default Page;
