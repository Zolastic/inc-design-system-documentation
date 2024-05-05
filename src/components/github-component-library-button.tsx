import { siteConfig } from "@/config/site";
import { Button } from "inc-design-system/button";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

type GitHubComponentLibraryButtonProps = {
  buttonClassName?: string;
  buttonVariant?: "primary" | "secondary" | "dashed" | "link" | "text";
  buttonText?: string;
};

const GitHubComponentLibraryButton = ({
  buttonClassName,
  buttonVariant = "primary",
  buttonText = "GitHub",
}: GitHubComponentLibraryButtonProps) => {
  return (
    <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
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

export default GitHubComponentLibraryButton;
