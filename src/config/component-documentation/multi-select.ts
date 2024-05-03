import MultiSelectDemo from "@/components/preview/multi-select";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const multiSelectProps: DocComponentProp[] = [
  {
    component: "MultiSelect",
    props: [
      {
        prop: "items",
        type: "MultiSelectItem[]",
        description: "Array of items to be displayed in the multi-select.",
      },
      {
        prop: "selectedItems",
        type: "MultiSelectItem[]",
        description: "Array of initially selected items.",
      },
      {
        prop: "placeholderText",
        type: "string",
        description: "Placeholder text displayed when no items are selected.",
        default: '"Select items..."',
      },
      {
        prop: "notFoundText",
        type: "string",
        description: "Text displayed when no items match the search criteria.",
      },
      {
        prop: "tagVariant",
        type: '"default" | "primary" | "secondary" | "transparentBackground"',
        description: "Variant for the tag displayed for selected items.",
      },
      {
        prop: "tagClassName",
        type: "string",
        description: "Additional class name for the tag component.",
      },
      {
        prop: "width",
        type: "React.CSSProperties['width']",
        description: "Width of the multi-select.",
        default: '"512px"',
      },
      {
        prop: "inputHeight",
        type: "React.CSSProperties['height']",
        description: "Height of the input field.",
        default: '"40px"',
      },
      {
        prop: "dropdownMaxHeight",
        type: "React.CSSProperties['height']",
        description: "Maximum height of the dropdown.",
        default: '"384px"',
      },
      {
        prop: "inputScrollable",
        type: "boolean",
        description: "Whether the input field should be scrollable.",
        default: "false",
      },
      {
        prop: "maxSelectedItems",
        type: "number",
        description: "Maximum number of items that can be selected.",
        default: "Number.MAX_SAFE_INTEGER",
      },
      {
        prop: "hidePlaceholderWhenSelected",
        type: "boolean",
        description: "Whether to hide the placeholder when items are selected.",
        default: "false",
      },
      {
        prop: "disabled",
        type: "boolean",
        description: "Whether the multi-select is disabled.",
        default: "false",
      },
      {
        prop: "defaultOpen",
        type: "boolean",
        description: "Whether the dropdown should be open by default.",
        default: "false",
      },
      {
        prop: "onMaxSelected",
        type: "(maxLimit: number) => void",
        description: "Callback when the maximum number of items is reached.",
      },
      {
        prop: "onSelectItem",
        type: "(item: MultiSelectItem) => void",
        description: "Callback when an item is selected.",
      },
      {
        prop: "onUnselectItem",
        type: "(item: MultiSelectItem) => void",
        description: "Callback when an item is unselected.",
      },
      {
        prop: "onOpen",
        type: "(open: boolean) => void",
        description: "Callback when the dropdown is opened or closed.",
      },
    ],
  },
];

const multiSelectComponentDocumentation: DocComponentDocumentation = {
  url: "multi-select",
  componentTitle: "Multi Select",
  componentDescription:
    "Multi select component to select multiple values from options.",
  previewCode: `import { MultiSelect, MultiSelectItem } from "inc-design-system/multiselect";
import React from "react";

type Props = {};

const MultiSelectDemo = (props: Props) => {
  const data: MultiSelectItem[] = Array.from({ length: 100 }, (_, i) => ({
    label: \`Option \${i + 1}\`,
    value: \`option-\${i + 1}\`,
  }));

  return <MultiSelect items={data} />;
};

export default MultiSelectDemo;`,
  previewComponent: MultiSelectDemo,
  usageCodeImport: `import { MultiSelect, MultiSelectItem } from "inc-design-system/multiselect";`,
  usageCode: `<MultiSelect items={data} />`,
  props: multiSelectProps,
};

export default multiSelectComponentDocumentation;
