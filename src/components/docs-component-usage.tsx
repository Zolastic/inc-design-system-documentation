"use client";

import { AdditionalCode } from "@/types/docs-component-documentation";
import CopyCodeHeader from "./copy-code-header";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  usageCodeImport: string;
  usageCode: string;
  additionalCode?: AdditionalCode[];
};

const DocsComponentUsage = ({
  usageCodeImport,
  usageCode,
  additionalCode,
}: Props) => {
  return (
    <>
      <h1 className="font-heading scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 w-full">
        Usage
      </h1>
      <div className="max-w-21 min-w-[25rem] bg-grey-100 rounded-md overflow-hidden mt-4">
        <CopyCodeHeader code={usageCodeImport} />
        <SyntaxHighlighter
          language="tsx"
          style={github}
          customStyle={{
            padding: "25px",
            overflowY: "auto",
          }}
          showLineNumbers
        >
          {usageCodeImport}
        </SyntaxHighlighter>
      </div>
      <div className="max-w-21 min-w-[25rem] bg-grey-100 rounded-md overflow-hidden mt-4">
        <CopyCodeHeader code={usageCode} />
        <SyntaxHighlighter
          language="tsx"
          style={github}
          customStyle={{
            padding: "25px",
            overflowY: "auto",
          }}
          showLineNumbers
        >
          {usageCode}
        </SyntaxHighlighter>
      </div>
      <div>
        {/* Additional code */}

        {additionalCode?.map((code, index) => (
          <div
            key={index}
            className="max-w-21 min-w-[25rem] bg-grey-100 rounded-md overflow-hidden mt-4"
          >
            <CopyCodeHeader code={code.code} />
            <SyntaxHighlighter
              language="tsx"
              style={github}
              customStyle={{
                padding: "25px",
                overflowY: "auto",
              }}
              showLineNumbers
            >
              {code.code}
            </SyntaxHighlighter>
          </div>
        ))}
      </div>
    </>
  );
};

export default DocsComponentUsage;
