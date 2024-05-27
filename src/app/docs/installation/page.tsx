import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";

type Props = {};

const Page = (props: Props) => {
  const pluginCode = `plugins: [require("inc-design-system"), require("tailwindcss-animate")]`;
  const contentCode = `content: ["./node_modules/inc-design-system/dist/**/*.{js,ts,jsx,tsx}"]`;
  const importCode = `import {Alert} from "inc-design-system/alert"`;

  return (
    <>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-text-default">
        Installation
      </h1>
      <p className="text-lg text-text-default/60 max-w-[750px] mt-2">
        How to install the INC Design System in your project.
      </p>

      {/* instructions */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-text-default mt-12">
          Instructions
        </h2>
        <p className="text-lg text-text-default/60 mt-2">
          Follow the instructions below to install the INC Design System in your
          project.
        </p>
        <div className="mt-4">
          <h3 className="text-xl font-bold text-text-default mt-8">
            1. Install the package
          </h3>
          <p className="text-lg text-text-default/60 mt-2">
            Install the package using npm.
          </p>
          <div className="mt-4">
            <SyntaxHighlighter language="bash" style={github}>
              npm install inc-design-system tailwindcss-animate
            </SyntaxHighlighter>
          </div>
          <h3 className="text-xl font-bold text-text-default mt-8">
            2. Add the plugin to your tailwind.config.ts
          </h3>
          <div className="mt-4">
            <SyntaxHighlighter language="typescript" style={github}>
              {pluginCode}
            </SyntaxHighlighter>
          </div>
          <h3 className="text-xl font-bold text-text-default mt-8">
            3. Add the package location to the contents in your
            tailwind.config.ts
          </h3>
          <div className="mt-4">
            <SyntaxHighlighter language="typescript" style={github}>
              {contentCode}
            </SyntaxHighlighter>
          </div>
          <h3 className="text-xl font-bold text-text-default mt-8">
            4. Import the component in your application
          </h3>
          <div className="mt-4">
            <SyntaxHighlighter language="typescript" style={github}>
              {importCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
