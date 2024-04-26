import SelectDemo from "@/components/preview/select-preview";
import {
  DocComponentDocumentation,
  DocComponentProp,
} from "@/types/docs-component-documentation";

const selectProps: DocComponentProp[] = [
  {
    component: "Select",
    props: [
      {
        prop: "onValueChange",
        type: "function",
        description:
          "A callback function is invoked when the selected value changes. Receives the newly selected value as an argument.",
      },
      {
        prop: "defaultValue",
        type: "string",
        description: "The default value of the select component.",
      },
      {
        prop: "value",
        type: "string",
        description: "The value of the select component.",
      },
      {
        prop: "disabled",
        type: "boolean",
        description: "Disables the select component.",
      },
    ],
  },
  {
    component: "SelectValue",
    props: [
      {
        prop: "placeholder",
        type: "string",
        description: "The placeholder of the select value.",
      },
    ],
  },
];

const selectComponentDocumentation: DocComponentDocumentation = {
  url: "select",
  componentTitle: "Select",
  componentDescription: "Select component to select value from options.",
  previewCode: `import {
              Select,
              SelectContent,
              SelectItem,
              SelectTrigger,
              SelectValue,
            } from "inc-design-system/select";
            import React from "react";
            
            const SelectDemo = () => {
              return (
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              );
            };
            
            export default SelectDemo;`,
  previewComponent: SelectDemo,
  usageCodeImport: `import {
          Select,
          SelectContent,
          SelectItem,
          SelectTrigger,
          SelectValue,
        } from "inc-design-system/select";`,
  usageCode: `<Select>
          <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
          </SelectContent>
      </Select>`,
  props: selectProps,
};

export default selectComponentDocumentation;
