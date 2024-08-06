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
        description: "Additional CSS classes to apply to the Textarea element.",
        default: "-",
      },
      {
        prop: "autosize",
        type: "boolean",
        description:
          "Resizes the Textarea height automatically based on text content if true. Note: The auto resize triggers onChange, so it may not work properly if the Textarea has a default value (e.g., `<Textarea value='Some huge text' />`) or if a placeholder is used. Default is false.",
        default: "false",
      },
      {
        prop: "showCharCount",
        type: "boolean",
        description:
          "Sets whether to show or hide the character count, which will be displayed below the Textarea on the right. This can be used with the maxLength property, which will show as char_count/maxLength. Default is false.",
        default: "false",
      },
      {
        prop: "containerClassName",
        type: "string",
        description:
          "Class name to control the parent div of the Textarea. This is effective only when `showCharCount={true}`.",
        default: "-",
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
  previewCode: `import { Textarea } from "inc-design-system/textarea"

  const TextareaDemo = () => {
    return (
      <Textarea autosize={true} showCharCount maxLength={100} />
    )
  }
  `,
  previewComponent: TextareaDemo,
  usageCodeImport: `import { Textarea } from "inc-design-system/textarea";`,
  usageCode: `<Textarea />`,
  props: textareaProps,
};

export default textareaComponentDocumentation;
