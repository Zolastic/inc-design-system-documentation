"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "inc-design-system/select";
import React, { useState } from "react";

type Props = {};

const Page = (props: Props) => {
  const [showCode, setShowCode] = useState(false);
  const code = `
  import {
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
  
  export default SelectDemo;  
  `;

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Select</h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        Select component to select value from options.
      </p>
      <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
        <div className="preview flex min-h-[350px] w-full justify-center p-10 items-center overflow-auto">
          {!showCode && (
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
          )}
          {showCode && (
            <pre>
              <code>{code}</code>
            </pre>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
