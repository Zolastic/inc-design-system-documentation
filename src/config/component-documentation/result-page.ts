import ResultDemo from "@/components/preview/result-page";

import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const resultPageProps: DocComponentProp[] = [
  {
    component: "ResultPage",
    // links: [
    //     {
    //         title: "API Reference",
    //         url: "https://www.radix-ui.com/primitives/docs/components/result-page",
    //     },
    // ]

    props: [
      {
        prop: "status",
        type: '"success" | "error" | "info" | "warning"',
        description:
          "Optional. Status of the result page, which determines the icon displayed.",
      },
      {
        prop: "title",
        type: "React.ReactNode",
        description: "Optional. Title of the result page.",
      },
      {
        prop: "subTitle",
        type: "React.ReactNode",
        description: "Optional. Subtitle of the result page.",
      },
      {
        prop: "extra",
        type: "React.ReactNode",
        description:
          "Optional. Additional content to display below the title and subtitle.",
      },
      {
        prop: "icon",
        type: "React.ReactNode",
        description:
          "Optional. Custom icon to display instead of the default icon based on status.",
      },
      {
        prop: "size",
        type: "number",
        description: "Optional. Size of the icon. Overrides the default size.",
      },
      {
        prop: "titleFontSize",
        type: "string",
        description: "Optional. Font size of the title text.",
        default: "'20px'",
      },
      {
        prop: "subTitleFontSize",
        type: "string",
        description: "Optional. Font size of the subtitle text.",
        default: "'12px'",
      },
    ],
  },
];

const resultPageComponentDocumentation: DocComponentDocumentation = {
  url: "result-page",
  componentTitle: "Result Page",
  componentDescription:
    "A component to display a result page with a status icon, title, and subtitle.",
  previewCode: `
    import React from "react";
import { Ban } from "lucide-react";
import { ResultPage } from "inc-design-system/resultPage"; 

const ResultDemo = () => {
  return (
    <div>
      {/* Test with different status text size icon size*/}
      <ResultPage
        status="success"
        title="Success"
        subTitle="Operation completed successfully"
        size={50}
        titleFontSize="30px"
        subTitleFontSize="18px"
      />
      <ResultPage
        status="error"
        title="Error"
        subTitle="An error occurred"
        size={50}
      />
      <ResultPage
        status="info"
        title="Info"
        subTitle="Additional information"
      />
      <ResultPage status="warning" title="Warning" subTitle="Be cautious!" />

      {/* Test with custom icon */}
      <ResultPage
        icon={<Ban size={24} />}
        title="Custom Icon"
        subTitle="This uses a custom icon component"
      />

      {/* Test with extra content */}
      <ResultPage
        status="success"
        title="Success"
        subTitle="Operation completed successfully"
        extra={
          <button
            style={{
              backgroundColor: "grey",
              color: "white",
              border: "none",
              padding: "5px",
              marginTop: "10px",
            }}
          >
            Back Home
          </button>
        }
      />
    </div>
  );
};

export default ResultDemo;
    `,
    previewComponent: ResultDemo,
    usageCodeImport: `import { ResultPage } from "inc-design-system/resultPage";`,
    usageCode: ` <ResultPage status="success" title="Success" subTitle="Operation completed successfully" />`,
    props: resultPageProps,
};

export default resultPageComponentDocumentation;