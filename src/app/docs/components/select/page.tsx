"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "inc-design-system/select";
import { Check, Clipboard } from "lucide-react";
import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {};

const Page = (props: Props) => {
  const [copy, setCopy] = useState(false);

  const code = `import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "inc-design-system/select";
  import React from "react";
  
  const SelectDemo = () => {
    return (
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    );
  };
  
  export default SelectDemo;`;

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Select</h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        Select component to select value from options.
      </p>
      <div className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
        <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center overflow-auto">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="max-w-21 min-w-[25rem] bg-grey-100 rounded-md overflow-hidden">
        <div className="flex justify-between px-4 text-text-default text-xs items-center">
          <p className="text-sm">Example Code</p>
          {copy ? (
            <button className="py-1 inline-flex items-center gap-1">
              <Check size={16} className="mt-1" />
              <span>Copied!</span>
            </button>
          ) : (
            <button
              className="py-1 inline-flex items-center gap-1"
              onClick={() => {
                navigator.clipboard.writeText(code);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 2000);
              }}
            >
              <Clipboard size={16} className="mt-1" />
              <span>Copy code</span>
            </button>
          )}
        </div>
        <SyntaxHighlighter
          language="tsx"
          style={github}
          customStyle={{
            padding: "25px",
          }}
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </>
  );
};

export default Page;
