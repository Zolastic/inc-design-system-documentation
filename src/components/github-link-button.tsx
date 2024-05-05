import { siteConfig } from "@/config/site";
import { Button } from "inc-design-system/button";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

type GitHubLinkButtonProps = {
  buttonClassName?: string;
  buttonVariant?: "primary" | "secondary" | "dashed" | "link" | "text";
  buttonText?: string;
  link?: string;
};

const GitHubLinkButton = ({
  buttonClassName,
  buttonVariant = "primary",
  buttonText = "GitHub",
  link = siteConfig.links.github,
}: GitHubLinkButtonProps) => {
  return (
    <Link href={link} target="_blank" rel="noreferrer">
      <Button
        variant={buttonVariant}
        className={
          `flex justify-center items-center space-x-2 bg-grey-700 hover:bg-grey-600` +
          buttonClassName
        }
      >
        <Github />
        <span>{buttonText}</span>
      </Button>
    </Link>
  );
};

export default GitHubLinkButton;
