import CheckableTagDemo from "@/components/preview/checkable-tag-preview";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const checkableTagProps: DocComponentProp[] = [
  {
    component: "CheckableTag",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the tag container.",
      },
      {
        prop: "variant",
        type: '"default" | "primary" | "secondary" | "transparentBackground"',
        description:
          "The variant of the tag. Can be one of 'default', 'primary', 'secondary', or 'transparentBackground'.",
        default: '"default"',
      },
      {
        prop: "checked",
        type: "boolean",
        description: "Whether the Tag is checked by default.",
        default: "false",
      },
      {
        prop: "checkedBackgroundColor",
        type: "string",
        description: "Background color when Tag is checked.",
        default: '"#DDD2F0"',
      },
      {
        prop: "checkedTextColor",
        type: "string",
        description: "Text color when Tag is checked.",
        default: '"#482384"',
      },
      {
        prop: "onClickTag",
        type: "() => void",
        description: "Callback when the Tag is clicked.",
      },
      {
        prop: "closeable",
        type: "boolean",
        description:
          "Whether the Tag can be closed. Default is false. If true, a close button will be displayed.",
        default: "false",
      },
      {
        prop: "onClose",
        type: "() => void",
        description: "Callback when the Tag is closed.",
      },
      {
        prop: "icon",
        type: "ReactNode",
        description: "Icon to display alongside the Tag text. Default is null.",
        default: "null",
      },
      {
        prop: "disabled",
        type: "boolean",
        description: "Whether the Tag is disabled. Default is false.",
        default: "false",
      },
      {
        prop: "border",
        type: "boolean",
        description: "Whether the Tag has a border. Default is true.",
        default: "true",
      },
    ],
  },
];

const checkableTagComponentDocumentation: DocComponentDocumentation = {
  url: "checkable-tag",
  componentTitle: "Checkable Tag",
  componentDescription:
    "Used for marking and categorisation. It works like Checkbox, click it to toggle checked state.",
  previewCode: `import { CheckableTag } from "inc-design-system/tag";
  import React from "react";
  
  const CheckableTagDemo = () => {
    return <CheckableTag>CheckableTag</CheckableTag>;
  };
  
  export default CheckableTagDemo;`,
  previewComponent: CheckableTagDemo,
  usageCodeImport: `import { CheckableTag } from "inc-design-system/tag";`,
  usageCode: `<CheckableTag>CheckableTag</CheckableTag>`,
  props: checkableTagProps,
};

export default checkableTagComponentDocumentation;
