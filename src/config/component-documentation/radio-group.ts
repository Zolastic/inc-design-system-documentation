import RadioGroupDemo from "@/components/preview/radio-group";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const radioGroupProps: DocComponentProp[] = [
  {
    component: "RadioGroup",
    props: [
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Render the radio group as a child component. Default is false.",
        default: "false",
      },
      {
        prop: "defaultValue",
        type: "string",
        description: "The default value of the radio group. No default value.",
      },
      {
        prop: "value",
        type: "string",
        description: "The value of the radio group. No default value.",
      },
      {
        prop: "onValueChange",
        type: "(value: string) => void",
        description:
          "Callback when the value of the radio group changes. No default value.",
      },
      {
        prop: "disabled",
        type: "boolean",
        description: "Whether the radio group is disabled. No default value.",
      },
      {
        prop: "name",
        type: "string",
        description: "The name attribute of the radio group. No default value.",
      },
      {
        prop: "required",
        type: "boolean",
        description:
          "Whether the radio group is required for form submission. No default value.",
      },
      {
        prop: "orientation",
        type: "enum",
        description: "The orientation of the radio group.",
        default: "undefined",
      },
      {
        prop: "dir",
        type: "enum",
        description: "The direction of the radio group. No default value.",
      },
      {
        prop: "loop",
        type: "boolean",
        description:
          "Whether the radio group should loop focus. Default is true.",
        default: "true",
      },
    ],
  },
  {
    component: "RadioGroupItem",
    props: [
      {
        prop: "asChild",
        type: "boolean",
        description:
          "Render the radio group item as a child component. Default is false.",
        default: "false",
      },
      {
        prop: "value",
        type: "string",
        description: "The value of the radio group item. No default value.",
      },
      {
        prop: "disabled",
        type: "boolean",
        description:
          "Whether the radio group item is disabled. No default value.",
      },
      {
        prop: "required",
        type: "boolean",
        description:
          "Whether the radio group item is required. No default value.",
      },
    ],
  },
];

const radioComponentDocumentation: DocComponentDocumentation = {
  url: "radio-group",
  componentTitle: "Radio Group",
  componentDescription: "Used to select a single state from multiple options.",
  previewCode: `import { RadioGroup, RadioGroupItem } from "inc-design-system/radioGroup";
import React from "react";

const RadioGroupDemo = () => {
  return (
    <RadioGroup defaultValue="default">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <h1>Default</h1>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="light" id="r2" />
        <h1>Light</h1>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="dark" id="r3" />
        <h1>Dark</h1>
      </div>
    </RadioGroup>
  );
};

export default RadioGroupDemo;`,
  previewComponent: RadioGroupDemo,
  usageCodeImport: `import { RadioGroup, RadioGroupItem } from "inc-design-system/radioGroup";`,
  usageCode: `<RadioGroup defaultValue="light">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="light" id="r2" />
    <h1>Light</h1>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="dark" id="r3" />
    <h1>Dark</h1>
  </div>
</RadioGroup>`,
  props: radioGroupProps,
};

export default radioComponentDocumentation;
