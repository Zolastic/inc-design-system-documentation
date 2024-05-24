import ProgressDemo from "@/components/preview/progress";

import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const progressProps: DocComponentProp[] = [
  {
    component: "Progress",
    links: [
      {
        title: "API Reference",
        url: "https://www.radix-ui.com/primitives/docs/components/progress",
      },
    ],
    props: [
      {
        prop: "isSuccess",
        type: "boolean",
        description:
          "If true, the progress bar will be styled with the success variant.",
      },
      {
        prop: "isError",
        type: "boolean",
        description:
          "If true, the progress bar will be styled with the error variant.",
      },
      {
        prop: "variant",
        type: '"default" | "isError" | "isSuccess"',
        description:
          "Specifies the variant of the progress bar. Overrides isSuccess and isError props.",
      },
      {
        prop: "showValueInfo",
        type: "boolean",
        description:
          "If true, the current progress value will be displayed in the center of the progress bar.",
      },
      {
        prop: "isCircle",
        type: "boolean",
        description:
          "If true, the progress bar will be circular instead of linear.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional class names to apply to the progress bar.",
      },
      {
        prop: "value",
        type: "number",
        description: "The current value of the progress bar.",
      },
      {
        prop: "...props",
        type: "React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>",
        description: "Additional props to pass to the progress bar component.",
      },
    ],
  },
];

const progressComponentDocumentation: DocComponentDocumentation = {
  url: "progress-bar",
  componentTitle: "Progress Bar",
  componentDescription:
    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  previewCode: `
    import { Progress } from "inc-design-system/progress";
import React from "react";

function ProgressDemo() {
  const [progress, setProgress] = React.useState(50); // Set initial progress value

  return (
    <div>
      <h1>Progress Bar Example</h1>
      <Progress value={progress} />
      <button
        onClick={() => setProgress(progress + 10)}
        style={{ marginRight: "30px" }}
      >
        Increase Progress
      </button>
      <button onClick={() => setProgress(progress - 10)}>
        Decrease Progress
      </button>
      <Progress value={90} isSuccess />
      <Progress value={30} showValueInfo />

      <Progress value={50} isCircle={true} />

      <Progress value={50} isSuccess isCircle={true} showValueInfo />
    </div>
  );
}

export default ProgressDemo;`,
    previewComponent: ProgressDemo,
    usageCodeImport: `import { Progress } from "inc-design-system/progress";`,
    usageCode: `<Progress value={50} />`,
    props: progressProps,
};

export default progressComponentDocumentation;