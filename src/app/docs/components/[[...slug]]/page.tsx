"use client";

import DocsComponentPreview from "@/components/docs-component-preview";
import { docComponentsDocumentation } from "@/config/docs-components-documentation";

type Props = {
  params: {
    slug: string[];
  };
};

const Page = ({ params }: Props) => {
  const slug = params.slug?.join("/") || "";
  const component = docComponentsDocumentation.find((doc) => doc.url === slug);

  if (!component) {
    return <div>Component not found</div>;
  }

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
        {component.componentTitle}
      </h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        {component.componentDescription}
      </p>

      <div className="mt-12">
        <DocsComponentPreview
          previewCode={component.previewCode}
          previewComponent={component.previewComponent()}
        />
      </div>
      {/* <div className="mt-12">
        <h1 className="font-heading scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 w-full">
          Usage
        </h1>
        <div className="max-w-21 min-w-[25rem] bg-grey-100 rounded-md overflow-hidden mt-4">
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
              maxHeight: "322px",
              overflowY: "auto",
            }}
            showLineNumbers
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div> */}
    </>
  );
};

export default Page;
