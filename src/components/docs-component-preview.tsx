"use client";

import { Check, Clipboard } from "lucide-react";
import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {
  previewCode: string;
  previewComponent: React.ReactNode;
};

const DocsComponentPreview = ({ previewComponent, previewCode }: Props) => {
  const [copy, setCopy] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  return (
    <>
      <div className="inline-flex h-9 items-center text-muted-foreground w-full justify-start rounded-none border-b bg-transparent p-0">
        <button
          className={
            `inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none` +
            ` ${showPreview ? "underline underline-offset-4" : ""}`
          }
          onClick={() => setShowPreview(true)}
        >
          Preview
        </button>
        <button
          className={
            `inline-flex items-center justify-center whitespace-nowrap py-1 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none` +
            ` ${!showPreview ? "underline underline-offset-4" : ""}`
          }
          onClick={() => setShowPreview(false)}
        >
          Code
        </button>
      </div>
      <div className="mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
        <div
          className={`preview flex min-h-[350px] w-full justify-center items-center overflow-auto ${
            showPreview ? "p-10" : "p-0"
          }`}
        >
          {showPreview ? (
            previewComponent
          ) : (
            <div className="w-full h-full bg-grey-100 rounded-md overflow-hidden">
              <div className="flex justify-between px-4 text-text-default text-xs items-center max-h-[28px]">
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
                      navigator.clipboard.writeText(previewCode);
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
                  maxHeight: "322px",
                  overflowY: "auto",
                  width: "100%",
                }}
                showLineNumbers
              >
                {previewCode}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DocsComponentPreview;
