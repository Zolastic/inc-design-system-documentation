import TagDemo from "@/components/preview/tag-preview";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const tagProps: DocComponentProp[] = [
  {
    component: "Tag",
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
          "The variant of the tag. Can be one of 'default', 'primary', or 'secondary'.",
        default: `"default"`,
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

const tagComponentDocumentation: DocComponentDocumentation = {
  url: "tag",
  componentTitle: "Tag",
  componentDescription: "Used for marking and categorisation.",
  previewCode: `import { Tag } from "inc-design-system/tag";
  import React from "react";
  
  const TagDemo = () => {
    return <Tag>Tag</Tag>;
  };
  
  export default TagDemo;`,
  previewComponent: TagDemo,
  usageCodeImport: `import { Tag } from "inc-design-system/tag";`,
  usageCode: `<Tag>Tag</Tag>`,
  props: tagProps,
};

export default tagComponentDocumentation;
