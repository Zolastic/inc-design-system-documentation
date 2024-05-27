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
        prop: "autosize",
        type: "boolean",
        description:
          "Resizes Textarea height automatically based on text content, if true. Note: The auto resize fires onChange, so it may not work if Textarea value is there by default (e.g., `<Textarea value='Some huge text' />`) or if a placeholder is used. Default is false.",
        default: "false",
      },
      {
        prop: "showCharCount",
        type: "boolean",
        description:
          "Sets whether to show or hide the character count, which will be displayed below the Textarea on the right. This can be used with the maxLength property, which will show as char_count/maxLength. Default is false.",
        default: "false",
      },
      // Discrepancy: The following prop is not documented in the component's source code
      {
        // prop: "containerClassName",
        prop: "className",
        type: "string",
        description:
          "The classname to control the parent div of the textarea, only works when showCharCount={true}. Default is false.",
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
