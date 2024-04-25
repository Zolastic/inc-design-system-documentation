import { ChevronRightIcon } from "lucide-react";
import React from "react";

type Props = {
  pageTitle: string;
};

const DocsBreadCrumb = ({ pageTitle }: Props) => {
  return (
    <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
      <div className="overflow-hidden text-ellipsis whitespace-nowrap">
        Docs
      </div>
      <ChevronRightIcon className="h-4 w-4" />
      <div className="font-medium text-foreground">{pageTitle}</div>
    </div>
  );
};

export default DocsBreadCrumb;
