import CheckboxDemo from "@/components/preview/checkbox";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const checkboxProps: DocComponentProp[] = [
  {
    component: "Checkbox",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes to apply to the checkbox.",
      },
      {
        prop: "indeterminate",
        type: "boolean",
        description: "Indeterminate state for checkbox. Default is false.",
        default: "false",
      },
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Render the checkbox as a child component. Default is false.",
        default: "false",
      },
      {
        prop: "defaultChecked",
        type: "boolean | 'indeterminate'",
        description:
          "The initial checked state of the checkbox. No default value.",
      },
      {
        prop: "checked",
        type: "boolean | 'indeterminate'",
        description: "The checked state of the checkbox. No default value.",
      },
      {
        prop: "onCheckedChange",
        type: "(checked: boolean | 'indeterminate') => void",
        description:
          "Callback when the checked state of the checkbox changes. No default value.",
      },
      {
        prop: "disabled",
        type: "boolean",
        description: "Whether the checkbox is disabled. No default value.",
      },
      {
        prop: "required",
        type: "boolean",
        description:
          "Whether the checkbox is required for form submission. No default value.",
      },
      {
        prop: "name",
        type: "string",
        description: "The name attribute of the checkbox. No default value.",
      },
      {
        prop: "value",
        type: "string",
        description: "The value attribute of the checkbox. No default value.",
      },
      // Other React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> props are inherited
      // Props like className, style, etc. are available but not documented here
    ],
  },
];

const checkboxComponentDocumentation: DocComponentDocumentation = {
  url: "checkbox",
  componentTitle: "Checkbox",
  componentDescription: "Collect user's choices.",
  previewCode: `import { Checkbox } from "inc-design-system/checkbox";
import React from "react";

const CheckboxDemo = () => {
  return <Checkbox />;
};

export default CheckboxDemo;`,
  previewComponent: CheckboxDemo,
  usageCodeImport: `import { Checkbox } from "inc-design-system/checkbox";`,
  usageCode: `<Checkbox />`,
  props: checkboxProps,
};

export default checkboxComponentDocumentation;
