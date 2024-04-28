import TextareaDemo from "@/components/preview/textarea";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const textareaProps: DocComponentProp[] = [
  {
    component: "Textarea",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the textarea.",
      },
      {
        prop: "showCharCount",
        type: "boolean",
        description:
          "Sets whether to show or hide the character count below the Textarea on the right.",
        default: "false",
      },
      {
        prop: "autosize",
        type: "boolean",
        description:
          "Resizes Textarea height automatically based on text content, if true. Note: The auto resize fires onChange, so it may not work if Textarea value is there by default (e.g., `<Textarea value='Some huge text' />`) or if a placeholder is used.",
        default: "false",
      },
      // Other React.TextareaHTMLAttributes<HTMLTextAreaElement> props are inherited
      // Props like value, onChange, etc. are available but not documented here
    ],
  },
];

const textareaComponentDocumentation: DocComponentDocumentation = {
  url: "textarea",
  componentTitle: "Textarea",
  componentDescription:
    "Displays a form textarea or a component that looks like a textarea.",
  previewCode: `import { Textarea } from "inc-design-system/textarea";
  import React from "react";
  
  const TextareaDemo = () => {
    return <Textarea autosize={true} showCharCount maxLength={100} />;
  };
  
  export default TextareaDemo;`,
  previewComponent: TextareaDemo,
  usageCodeImport: `import { Textarea } from "inc-design-system/textarea";`,
  usageCode: `<Textarea />`,
  props: textareaProps,
};

export default textareaComponentDocumentation;
